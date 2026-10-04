"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildApp = buildApp;
const fastify_1 = __importDefault(require("fastify"));
const env_1 = __importDefault(require("./plugins/env"));
const core_1 = require("./core");
const auth_1 = __importDefault(require("./plugins/auth"));
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
async function registerGeneratedRoutes(app) {
    const routesDir = (0, node_path_1.join)(__dirname, 'routes');
    for (const file of (0, node_fs_1.readdirSync)(routesDir)) {
        if (!(file.endsWith('router.ts') || file.endsWith('router.js')))
            continue;
        const mod = await Promise.resolve(`${(0, node_path_1.join)(routesDir, file)}`).then(s => __importStar(require(s)));
        if (mod?.default) {
            await app.register(mod.default);
        }
    }
}
async function buildApp() {
    const fastify = (0, fastify_1.default)({
        logger: { level: process.env.LOG_LEVEL ?? 'info' }
    });
    await fastify.register(env_1.default);
    const corsOrigin = fastify.env?.CORS_ORIGIN ?? process.env.CORS_ORIGIN ?? '*';
    await fastify.register((await Promise.resolve().then(() => __importStar(require('@fastify/helmet')))).default);
    await fastify.register((await Promise.resolve().then(() => __importStar(require('@fastify/cors')))).default, {
        origin: corsOrigin
    });
    await fastify.register(core_1.requestIdPlugin);
    await fastify.register(core_1.requestBodyLoggerPlugin);
    await fastify.register(core_1.requestLoggerPlugin);
    await fastify.register((0, core_1.createMetricsPlugin)());
    const rateLimitMax = Number(fastify.env?.RATE_LIMIT_MAX ?? process.env.RATE_LIMIT_MAX ?? '120');
    const rateLimitWindow = fastify.env?.RATE_LIMIT_WINDOW ?? process.env.RATE_LIMIT_WINDOW ?? '60 seconds';
    await fastify.register((await Promise.resolve().then(() => __importStar(require('@fastify/rate-limit')))).default, {
        max: rateLimitMax,
        timeWindow: rateLimitWindow,
        addHeaders: {
            'x-ratelimit-limit': true,
            'x-ratelimit-remaining': true,
            'x-ratelimit-reset': true
        }
    });
    await fastify.register(auth_1.default);
    (0, core_1.registerErrorHandler)(fastify);
    // await registerGeneratedRoutes(fastify)
    await fastify.register((await Promise.resolve().then(() => __importStar(require('@fastify/http-proxy')))).default, {
        upstream: fastify.env?.SERVICE_AUTH_URL ?? process.env.SERVICE_AUTH_URL ?? '',
        prefix: '/auth',
        rewritePrefix: '/auth'
    });
    await fastify.register((await Promise.resolve().then(() => __importStar(require('@fastify/http-proxy')))).default, {
        upstream: fastify.env?.SERVICE_BILLING_URL ?? process.env.SERVICE_BILLING_URL ?? '',
        prefix: '/billing',
        rewritePrefix: '/billing'
    });
    await fastify.register((await Promise.resolve().then(() => __importStar(require('@fastify/http-proxy')))).default, {
        upstream: fastify.env?.SERVICE_NOTIFICATION_URL ?? process.env.SERVICE_NOTIFICATION_URL ?? '',
        prefix: '/notifications',
        rewritePrefix: '/notifications'
    });
    await fastify.register((await Promise.resolve().then(() => __importStar(require('@fastify/http-proxy')))).default, {
        upstream: fastify.env?.SERVICE_SCHOOL_URL ?? process.env.SERVICE_SCHOOL_URL ?? '',
        prefix: '/school',
        rewritePrefix: '/school'
    });
    await fastify.register((await Promise.resolve().then(() => __importStar(require('@fastify/http-proxy')))).default, {
        upstream: fastify.env?.SERVICE_CRM_URL ?? process.env.SERVICE_CRM_URL ?? '',
        prefix: '/crm',
        rewritePrefix: '/crm'
    });
    return fastify;
}
