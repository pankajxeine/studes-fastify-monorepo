"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DesignationService_1 = require("../../services/hr/designation/DesignationService");
const DesignationRoutes = async (app) => {
    const controller = new DesignationService_1.DesignationService();
    app.get('/designation', async (request, reply) => {
        const result = await controller.listDesignation(app, request);
        return reply.send(result);
    });
    app.post('/designation', async (request, reply) => {
        const result = await controller.createDesignation(app, request.body, request);
        return reply.send(result);
    });
    app.get('/designation/:id', async (request, reply) => {
        const result = await controller.getDesignationById(app, request);
        return reply.send(result);
    });
    app.put('/designation/:id', async (request, reply) => {
        const result = await controller.updateDesignation(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/designation/:id', async (request, reply) => {
        const result = await controller.deleteDesignation(app, request);
        return reply.send(result);
    });
};
exports.default = DesignationRoutes;
