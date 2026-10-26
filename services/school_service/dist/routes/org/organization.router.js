"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OrganizationService_1 = require("../../services/org/organization/OrganizationService");
const OrganizationRoutes = async (app) => {
    const controller = new OrganizationService_1.OrganizationService();
    app.get('/organization', async (request, reply) => {
        const result = await controller.listOrganization(app, request);
        return reply.send(result);
    });
    app.post('/organization', async (request, reply) => {
        const result = await controller.createOrganization(app, request.body, request);
        return reply.send(result);
    });
    app.get('/organization/:id', async (request, reply) => {
        const result = await controller.getOrganizationById(app, request);
        return reply.send(result);
    });
    app.put('/organization/:id', async (request, reply) => {
        const result = await controller.updateOrganization(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/organization/:id', async (request, reply) => {
        const result = await controller.deleteOrganization(app, request);
        return reply.send(result);
    });
};
exports.default = OrganizationRoutes;
