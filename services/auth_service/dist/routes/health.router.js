"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HealthService_1 = require("../services/health/HealthService");
const HealthRoutes = async (app) => {
    const controller = new HealthService_1.HealthService();
    app.get('/health', async (request, reply) => {
        return await reply.send(controller.authHealth(app, request));
    });
    app.get('/health/db', async (request, reply) => {
        return await reply.send(controller.authHealthDb(app, request));
    });
};
exports.default = HealthRoutes;
