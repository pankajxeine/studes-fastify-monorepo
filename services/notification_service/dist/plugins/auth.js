"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const http_errors_1 = require("../errors/http-errors");
exports.default = (0, fastify_plugin_1.default)(async (app) => {
    app.addHook('onRequest', async (request) => {
        const config = request.routeOptions.config ?? {};
        if (config.requireAuth === false)
            return;
        try {
            await request.jwtVerify();
        }
        catch {
            throw new http_errors_1.UnauthorizedError('Invalid or missing token');
        }
    });
});
