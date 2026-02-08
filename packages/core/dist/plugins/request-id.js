"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const node_crypto_1 = __importDefault(require("node:crypto"));
exports.default = (0, fastify_plugin_1.default)(async (app) => {
    app.addHook('onRequest', async (request, reply) => {
        const incoming = request.headers['x-request-id'] ?? '';
        const id = incoming.trim() || node_crypto_1.default.randomUUID();
        request.headers['x-request-id'] = id;
        reply.header('x-request-id', id);
        request.log = request.log.child({ requestId: id });
    });
});
