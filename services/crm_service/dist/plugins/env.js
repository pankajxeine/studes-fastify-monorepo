"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const env_1 = __importDefault(require("@fastify/env"));
exports.default = (0, fastify_plugin_1.default)(async (app) => {
    await app.register(env_1.default, {
        schema: {
            type: 'object',
            required: ['PORT', 'DATABASE_URL', 'JWT_SECRET', 'SESSION_COOKIE_NAME', 'SESSION_COOKIE_SECRET'],
            properties: {
                PORT: { type: 'string', default: '3001' },
                LOG_LEVEL: { type: 'string', default: 'info' },
                DATABASE_URL: { type: 'string' },
                DEFAULT_CPANEL_SCHEMA: { type: 'string', default: 'test_cpanel' },
                CORS_ORIGIN: { type: 'string', default: '*' },
                JWT_SECRET: { type: 'string' },
                JWT_REFRESH_SECRET: { type: 'string' },
                JWT_EXPIRY: { type: 'string', default: '15m' },
                JWT_REFRESH_EXPIRY: { type: 'string', default: '7d' },
                SESSION_COOKIE_NAME: { type: 'string', default: 'studes_session' },
                SESSION_COOKIE_SECRET: { type: 'string' },
            },
        },
        dotenv: true,
        confKey: 'env',
    });
});
