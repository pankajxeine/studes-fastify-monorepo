"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ScholarshipService_1 = require("../../services/finance/scholarship/ScholarshipService");
const ScholarshipRoutes = async (app) => {
    const controller = new ScholarshipService_1.ScholarshipService();
    app.get('/scholarship', async (request, reply) => {
        const result = await controller.listScholarship(app, request);
        return reply.send(result);
    });
    app.post('/scholarship', async (request, reply) => {
        const result = await controller.createScholarship(app, request.body, request);
        return reply.send(result);
    });
    app.get('/scholarship/:id', async (request, reply) => {
        const result = await controller.getScholarshipById(app, request);
        return reply.send(result);
    });
    app.put('/scholarship/:id', async (request, reply) => {
        const result = await controller.updateScholarship(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/scholarship/:id', async (request, reply) => {
        const result = await controller.deleteScholarship(app, request);
        return reply.send(result);
    });
};
exports.default = ScholarshipRoutes;
