"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IncidentService_1 = require("../../services/discipline/incident/IncidentService");
const IncidentRoutes = async (app) => {
    const controller = new IncidentService_1.IncidentService();
    app.get('/incident', async (request, reply) => {
        const result = await controller.listIncident(app, request);
        return reply.send(result);
    });
    app.post('/incident', async (request, reply) => {
        const result = await controller.createIncident(app, request.body, request);
        return reply.send(result);
    });
    app.get('/incident/:id', async (request, reply) => {
        const result = await controller.getIncidentById(app, request);
        return reply.send(result);
    });
    app.put('/incident/:id', async (request, reply) => {
        const result = await controller.updateIncident(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/incident/:id', async (request, reply) => {
        const result = await controller.deleteIncident(app, request);
        return reply.send(result);
    });
};
exports.default = IncidentRoutes;
