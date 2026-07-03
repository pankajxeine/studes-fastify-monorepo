"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const jwt_1 = __importDefault(require("@fastify/jwt"));
const cookie_1 = __importDefault(require("@fastify/cookie"));
exports.default = (0, fastify_plugin_1.default)(async (app) => {
    const jwtSecret = app.env?.JWT_SECRET ?? process.env.JWT_SECRET;
    const cookieSecret = app.env?.SESSION_COOKIE_SECRET ?? process.env.SESSION_COOKIE_SECRET;
    if (!jwtSecret) {
        throw new Error('JWT_SECRET is required');
    }
    if (!cookieSecret) {
        throw new Error('SESSION_COOKIE_SECRET is required');
    }
    await app.register(jwt_1.default, { secret: jwtSecret });
    await app.register(cookie_1.default, {
        secret: cookieSecret,
        hook: 'onRequest'
    });
});
