"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VisitService_1 = require("../../services/visitor/visit/VisitService");
const VisitRoutes = async (app) => {
    const controller = new VisitService_1.VisitService();
    app.get('/visit', async (request, reply) => {
        const result = await controller.listVisit(app, request);
        return reply.send(result);
    });
    app.post('/visit', async (request, reply) => {
        const result = await controller.createVisit(app, request.body, request);
        return reply.send(result);
    });
    app.get('/visit/:id', async (request, reply) => {
        const result = await controller.getVisitById(app, request);
        return reply.send(result);
    });
    app.put('/visit/:id', async (request, reply) => {
        const result = await controller.updateVisit(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/visit/:id', async (request, reply) => {
        const result = await controller.deleteVisit(app, request);
        return reply.send(result);
    });
};
exports.default = VisitRoutes;
