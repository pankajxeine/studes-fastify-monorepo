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
            required: ['PORT', 'DATABASE_URL', 'JWT_SECRET'],
            properties: {
                PORT: { type: 'string', default: '3000' },
                LOG_LEVEL: { type: 'string', default: 'info' },
                DATABASE_URL: { type: 'string' },
                TENANT_BASE_DOMAIN: { type: 'string', default: 'localtest.me' },
                TENANT_HEADER_NAME: { type: 'string', default: 'x-tenant-id' },
                TENANT_HEADER_SLUG_NAME: { type: 'string', default: 'x-tenant-slug' },
                TENANT_HEADER_PRECEDENCE: { type: 'string', default: 'header_then_subdomain' },
                CORS_ORIGIN: { type: 'string', default: '*' },
                JWT_SECRET: { type: 'string' }
            }
        },
        dotenv: true,
        confKey: 'env'
    });
});
