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
exports.createMetricsPlugin = createMetricsPlugin;
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const client = __importStar(require("prom-client"));
function createMetricsPlugin(options = {}) {
    return (0, fastify_plugin_1.default)(async (app) => {
        const register = new client.Registry();
        client.collectDefaultMetrics({ register });
        const labelNames = options.includeTenant ? ['method', 'route', 'status', 'tenant'] : ['method', 'route', 'status'];
        const httpDuration = new client.Histogram({
            name: 'http_request_duration_ms',
            help: 'Duration of HTTP requests in ms',
            labelNames,
            registers: [register]
        });
        app.addHook('onResponse', async (request, reply) => {
            const route = request.routeOptions?.url ?? request.url;
            if (options.includeTenant) {
                const tenant = request.tenant?.slug ?? 'unknown';
                httpDuration.labels(request.method, route, String(reply.statusCode), tenant).observe(reply.elapsedTime);
            }
            else {
                httpDuration.labels(request.method, route, String(reply.statusCode)).observe(reply.elapsedTime);
            }
        });
        app.get(options.path ?? '/metrics', { config: { requireTenant: options.requireTenant ?? false, requireAuth: options.requireAuth ?? false } }, async (_req, reply) => {
            reply.header('content-type', register.contentType);
            return register.metrics();
        });
    });
}
