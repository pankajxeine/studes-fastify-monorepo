"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HealthCheckupService_1 = require("../../services/health/health_checkup/HealthCheckupService");
const HealthCheckupRoutes = async (app) => {
    const controller = new HealthCheckupService_1.HealthCheckupService();
    app.get('/health_checkup', async (request, reply) => {
        const result = await controller.listHealthCheckup(app, request);
        return reply.send(result);
    });
    app.post('/health_checkup', async (request, reply) => {
        const result = await controller.createHealthCheckup(app, request.body, request);
        return reply.send(result);
    });
    app.get('/health_checkup/:id', async (request, reply) => {
        const result = await controller.getHealthCheckupById(app, request);
        return reply.send(result);
    });
    app.put('/health_checkup/:id', async (request, reply) => {
        const result = await controller.updateHealthCheckup(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/health_checkup/:id', async (request, reply) => {
        const result = await controller.deleteHealthCheckup(app, request);
        return reply.send(result);
    });
};
exports.default = HealthCheckupRoutes;
