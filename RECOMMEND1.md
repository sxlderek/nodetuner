# Code Review: index-mod3.js

## 🔴 Bugs (fix these first)

### 1. `AUTO_ACCESS` env parsing is broken (line 14)
```js
const AUTO_ACCESS = process.env.AUTO_ACCESS || false;
```
Environment variables are **strings**. `process.env.AUTO_ACCESS` set to `"false"` is a **truthy string**, so auto-access is always enabled when the var exists. This is the same class of bug you correctly avoided with `SHOW_LOG` on line 34.

**Fix:**
```js
const AUTO_ACCESS = !["false", "0", "no", "disable"].includes(
    (process.env.AUTO_ACCESS || "").toLowerCase(),
) && Boolean(process.env.AUTO_ACCESS);
```

### 2. `cleanFiles` callback never fires (lines 1063, 1069)
At the top of the file you do:
```js
const exec = promisify(execCommand);
```
So `exec` is the **promisified** version — it ignores callback arguments. But in `cleanFiles` you call:
```js
exec(`del /f /q ${filesToDelete.join(" ")} > nul 2>&1`, (error) => {
    console.clear();
    alwaysLog("App is running");
    ...
});
```
The callback is **never invoked**, so `console.clear()` / "App is running" never runs, and errors are silently lost.

**Fix:** Either `await exec(...)` inside an async wrapper, or keep a reference to the original callback-style `exec`:
```js
const { exec: execCb, execSync } = require("child_process");
const exec = promisify(execCb);
// then in cleanFiles:
execCb(`rm -rf ${filesToDelete.join(" ")} >/dev/null 2>&1`, () => {
    console.clear();
    alwaysLog("App is running");
});
```
Also note: on Windows `execCb` spawns `cmd.exe`, and `del` is a cmd builtin — that works, but `> nul 2>&1` redirection plus `execCb` is fine. Just be consistent.

### 3. Fragile JSON parsing by quote-splitting (line 733)
```js
tunnel: ${ARGO_AUTH.split('"')[11]}
```
This indexes into an array produced by splitting raw JSON on `"` — it silently breaks if key order/whitespace changes.

**Fix:** Parse the JSON properly:
```js
const tunnelCreds = JSON.parse(ARGO_AUTH);
const tunnelId = tunnelCreds.TunnelID || tunnelCreds.TunnelID;
// then use tunnelId in the YAML
```

### 4. `key.txt` (containing the X25519 private key) is never cleaned up
`cleanFiles` deletes `certPath`/`keyPath` (TLS cert) but **not** `path.join(FILE_PATH, "key.txt")` which holds the Reality private key (line 173). This is both a security leak and a stale-state bug.

**Fix:** Add `path.join(FILE_PATH, "key.txt")` and `path.join(FILE_PATH, "tunnel.json")` to `filesToDelete`.

### 5. `execSync` imported but the callback-style `exec` is shadowed
You import `execSync` (line 10) but I don't see it used — dead import. Meanwhile the original callback `exec` is shadowed by the promisified one, which is what caused bug #2.

---

## 🟠 Security

### 6. Command injection via env vars
All process launches interpolate env values into shell strings:
```js
`nohup ${npmPath} -s ${NEZHA_SERVER}:${NEZHA_PORT} -p ${NEZHA_KEY} ${NEZHA_TLS} ...`
```
If any of `NEZHA_SERVER`, `NEZHA_KEY`, `ARGO_AUTH`, `UUID`, etc. contain shell metacharacters (`;`, `` ` ``, `$()`, etc.), arbitrary commands run. Since these come from the environment they're somewhat trusted, but on shared/PaaS deployments they can be attacker-influenced.

**Fix:** Prefer `execFile`/`spawn` with arg arrays instead of `exec` with a shell string:
```js
const { spawn } = require("child_process");
spawn(npmPath, ["-s", `${NEZHA_SERVER}:${NEZHA_PORT}`, "-p", NEZHA_KEY, NEZHA_TLS, ...],
    { detached: true, stdio: "ignore" }).unref();
```

### 7. `insecure_tls: true` in Nezha config (line 615)
Disables TLS verification for the Nezha connection. If you don't strictly need it, set it from an env flag so it's opt-in only.

### 8. Subscription endpoint has no access control (line 1166)
`/{SUB_PATH}` is served to anyone who guesses the path. Consider an optional token query param (`?token=...`) gated by an env var.

### 9. Hardcoded default UUID (line 18)
`"30b02ee1-b52a-4f37-ac4b-c667324daf95"` — every deployment that forgets to set `UUID` shares the same identity. At minimum, log a loud warning when the default is in use, or generate a random one on first run.

---

## 🟡 Code Quality / Maintainability

### 10. The file is 1209 lines — split into modules
Suggested structure:
```
src/
  config.js        // env parsing + validation
  paths.js         // FILE_PATH-derived path constants
  nezha.js         // nezha config + launch
  argo.js          // argoType, tunnel yaml, quick-tunnel log parsing
  xray-config.js   // generateConfig
  subscription.js  // extractDomains, node generation, base64 encoding
  upload.js        // uploadNodes, deleteNodes
  telegram.js      // sendTelegram
  cleanup.js       // cleanupOldFiles, cleanFiles
  server.js        // http server + routes
  index.js         // orchestrates startserver()
```

### 11. Duplicated logic
- The protocol regex `/(vless|vmess|trojan|hysteria2|socks):\/\//` appears in `deleteNodes` (line 117) and `uploadNodes` (line 1013). Extract a constant: `const NODE_PROTOCOL_RE = /.../;`.
- The TLS-ports array is defined twice (lines ~599 and ~639). Extract `const TLS_PORTS = new Set(["443","8443","2096","2087","2083","2053"]);`.
- `isValidPort` could be reused everywhere a port is read.

### 12. Global mutable state
`subContent`, `privateKey`, `publicKey`, and all the `let` path variables are module-global and mutated from many places. Encapsulate them — e.g., a `state` object or return values from init functions. This makes the code testable.

### 13. Inconsistent async/sync filesystem usage
You mix `fs.readFileSync`/`fs.writeFileSync` with `fs.promises.readFile`. Pick one (prefer `fs/promises` in async functions). The HTTP handler (line 1172) does a sync `readFileSync` on every fallback request — blocking the event loop.

### 14. `extractDomains` wraps a Promise + `setTimeout(2000)` (line ~830)
This is the deferred-callback-in-a-Promise anti-pattern. Refactor to `async`/`await` with an explicit `await sleep(2000)`.

### 15. No server error handling (line 1209)
```js
server.listen(PORT, () => alwaysLog(...));
```
Add:
```js
server.on("error", (err) => {
    if (err.code === "EADDRINUSE") alwaysLog(`Port ${PORT} already in use`);
    else alwaysLog(`Server error: ${err.message}`);
});
```

### 16. No graceful shutdown
Add signal handlers to kill child processes cleanly:
```js
for (const sig of ["SIGINT", "SIGTERM", "SIGHUP"]) {
    process.on(sig, () => { /* kill tracked child PIDs */ process.exit(0); });
}
```
Currently children are detached via `nohup &` with no PID tracking, so they're orphaned on shutdown.

### 17. Crude logging override (lines 39–42)
```js
if (!SHOW_LOG) { console.log = () => {}; console.error = () => {}; }
```
Replacing globals is fragile (breaks any lib that captured a reference). Use a small logger wrapper instead:
```js
const log = SHOW_LOG ? (...a) => console.log(...a) : () => {};
const logErr = SHOW_LOG ? (...a) => console.error(...a) : () => {};
```

### 18. Magic numbers
- `setTimeout(..., 90000)` in `cleanFiles`
- `setTimeout(resolve, 1000/2000/5000)` scattered through `downloadFilesAndRun`
- Hardcoded local ports `3001`–`3004`, `8001`

Give them named constants at the top.

### 19. `console.clear()` on cleanup
Clearing the terminal 90s after startup is surprising behavior, especially in container/log-aggregation environments where it wipes scrollback. Make it opt-in.

### 20. `cleanFiles()` is called at module top-level (line 1080)
This schedules a 90s deletion as a side effect of `require`/import, which is surprising if this file is ever imported by tests. Move it into `startserver()`.

---

## 🟢 Minor / Polish

- `getCertificateFingerprint` has two parallel code paths (openssl via `execSync`, then Node crypto fallback) with duplicated DER extraction — consolidate.
- `generateRandomName` uses `Math.random()` — fine for names, but `crypto.randomBytes` would be more idiomatic.
- `AddVisitTask` posts to a hardcoded third-party URL `https://oooo.serv00.net/add-url` — make it configurable via env.
- Download URLs (`arm64.oooen.com`, etc.) are hardcoded — move to a config constant so they're easy to swap.
- `sendTelegram` uses `parse_mode: "MarkdownV2"` but escapes with a regex that may miss some chars (e.g., it escapes `-` but the message uses literal `**` bold which in MarkdownV2 should be `\*\*`). Consider `Markdown` mode or HTML for robustness.
- Inconsistent comment language (Chinese/English) — pick one for consistency, or keep but standardize.

---

## Summary of highest-impact fixes

| # | Issue | Severity |
|---|-------|----------|
| 1 | `AUTO_ACCESS` string-truthy bug | 🔴 High |
| 2 | `cleanFiles` callback never fires (promisified exec) | 🔴 High |
| 3 | Quote-splitting JSON for tunnel ID | 🔴 High |
| 4 | `key.txt`/`tunnel.json` never deleted | 🟠 Medium |
| 6 | Shell injection via env vars | 🟠 Medium |
| 10 | Monolithic 1209-line file | 🟡 Maintainability |
| 16 | No graceful shutdown / PID tracking | 🟡 Medium |
