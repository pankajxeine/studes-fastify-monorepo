"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InternshipService_1 = require("../../services/partner/internship/InternshipService");
const InternshipRoutes = async (app) => {
    const controller = new InternshipService_1.InternshipService();
    app.get('/internship', async (request, reply) => {
        const result = await controller.listInternship(app, request);
        return reply.send(result);
    });
    app.post('/internship', async (request, reply) => {
        const result = await controller.createInternship(app, request.body, request);
        return reply.send(result);
    });
    app.get('/internship/:id', async (request, reply) => {
        const result = await controller.getInternshipById(app, request);
        return reply.send(result);
    });
    app.put('/internship/:id', async (request, reply) => {
        const result = await controller.updateInternship(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/internship/:id', async (request, reply) => {
        const result = await controller.deleteInternship(app, request);
        return reply.send(result);
    });
};
exports.default = InternshipRoutes;
