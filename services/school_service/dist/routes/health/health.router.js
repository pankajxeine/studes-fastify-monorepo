"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HealthService_1 = require("../../services/health/HealthService");
const HealthRoutes = async (app) => {
    const controller = new HealthService_1.HealthService();
    app.get('/health', async (request, reply) => {
        const result = await controller.authHealth(app, request);
        return reply.send(result);
    });
    app.get('/health/db', async (request, reply) => {
        const result = await controller.authHealthDb(app, request);
        return reply.send(result);
    });
};
exports.default = HealthRoutes;
