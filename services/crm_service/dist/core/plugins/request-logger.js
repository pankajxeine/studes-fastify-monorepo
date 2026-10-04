"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
exports.default = (0, fastify_plugin_1.default)(async (app) => {
    app.addHook('onResponse', async (request, reply) => {
        const responseTime = reply.elapsedTime;
        request.log.info({
            method: request.method,
            url: request.url,
            statusCode: reply.statusCode,
            responseTime
        }, 'request completed');
    });
});
