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
            required: [
                'PORT',
                'SERVICE_AUTH_URL',
                'SERVICE_BILLING_URL',
                'SERVICE_NOTIFICATION_URL',
                'SERVICE_SCHOOL_URL',
                'SERVICE_CRM_URL',
                'JWT_SECRET'
            ],
            properties: {
                PORT: { type: 'string', default: '3000' },
                LOG_LEVEL: { type: 'string', default: 'info' },
                CORS_ORIGIN: { type: 'string', default: '*' },
                SERVICE_AUTH_URL: { type: 'string' },
                SERVICE_BILLING_URL: { type: 'string' },
                SERVICE_NOTIFICATION_URL: { type: 'string' },
                SERVICE_SCHOOL_URL: { type: 'string' },
                SERVICE_CRM_URL: { type: 'string' },
                JWT_SECRET: { type: 'string' },
                RATE_LIMIT_MAX: { type: 'string', default: '120' },
                RATE_LIMIT_WINDOW: { type: 'string', default: '60 seconds' }
            }
        },
        dotenv: true,
        confKey: 'env'
    });
});
