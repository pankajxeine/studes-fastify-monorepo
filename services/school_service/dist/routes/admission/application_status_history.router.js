"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationStatusHistoryService_1 = require("../../services/admission/application_status_history/ApplicationStatusHistoryService");
const ApplicationStatusHistoryRoutes = async (app) => {
    const controller = new ApplicationStatusHistoryService_1.ApplicationStatusHistoryService();
    app.get('/application_status_history', async (request, reply) => {
        const result = await controller.listApplicationStatusHistory(app, request);
        return reply.send(result);
    });
    app.post('/application_status_history', async (request, reply) => {
        const result = await controller.createApplicationStatusHistory(app, request.body, request);
        return reply.send(result);
    });
    app.get('/application_status_history/:id', async (request, reply) => {
        const result = await controller.getApplicationStatusHistoryById(app, request);
        return reply.send(result);
    });
    app.put('/application_status_history/:id', async (request, reply) => {
        const result = await controller.updateApplicationStatusHistory(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/application_status_history/:id', async (request, reply) => {
        const result = await controller.deleteApplicationStatusHistory(app, request);
        return reply.send(result);
    });
};
exports.default = ApplicationStatusHistoryRoutes;
