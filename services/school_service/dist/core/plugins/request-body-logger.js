"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const SENSITIVE_KEYS = new Set(['password', 'token', 'authorization', 'cookie', 'set-cookie']);
function redact(value) {
    if (value && typeof value === 'object') {
        if (Array.isArray(value)) {
            return value.map(redact);
        }
        const obj = value;
        const out = {};
        for (const [key, val] of Object.entries(obj)) {
            if (SENSITIVE_KEYS.has(key.toLowerCase())) {
                out[key] = '[REDACTED]';
            }
            else {
                out[key] = redact(val);
            }
        }
        return out;
    }
    return value;
}
exports.default = (0, fastify_plugin_1.default)(async (app) => {
    app.addHook('preValidation', async (request) => {
        const body = request.body ?? null;
        request.log.info({
            method: request.method,
            url: request.url,
            headers: redact(request.headers),
            body: redact(body)
        }, 'request received');
    });
});
