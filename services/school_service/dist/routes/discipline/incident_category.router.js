"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IncidentCategoryService_1 = require("../../services/discipline/incident_category/IncidentCategoryService");
const IncidentCategoryRoutes = async (app) => {
    const controller = new IncidentCategoryService_1.IncidentCategoryService();
    app.get('/incident_category', async (request, reply) => {
        const result = await controller.listIncidentCategory(app, request);
        return reply.send(result);
    });
    app.post('/incident_category', async (request, reply) => {
        const result = await controller.createIncidentCategory(app, request.body, request);
        return reply.send(result);
    });
    app.get('/incident_category/:id', async (request, reply) => {
        const result = await controller.getIncidentCategoryById(app, request);
        return reply.send(result);
    });
    app.put('/incident_category/:id', async (request, reply) => {
        const result = await controller.updateIncidentCategory(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/incident_category/:id', async (request, reply) => {
        const result = await controller.deleteIncidentCategory(app, request);
        return reply.send(result);
    });
};
exports.default = IncidentCategoryRoutes;
