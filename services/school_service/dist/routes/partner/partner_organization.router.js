"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PartnerOrganizationService_1 = require("../../services/partner/partner_organization/PartnerOrganizationService");
const PartnerOrganizationRoutes = async (app) => {
    const controller = new PartnerOrganizationService_1.PartnerOrganizationService();
    app.get('/partner_organization', async (request, reply) => {
        const result = await controller.listPartnerOrganization(app, request);
        return reply.send(result);
    });
    app.post('/partner_organization', async (request, reply) => {
        const result = await controller.createPartnerOrganization(app, request.body, request);
        return reply.send(result);
    });
    app.get('/partner_organization/:id', async (request, reply) => {
        const result = await controller.getPartnerOrganizationById(app, request);
        return reply.send(result);
    });
    app.put('/partner_organization/:id', async (request, reply) => {
        const result = await controller.updatePartnerOrganization(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/partner_organization/:id', async (request, reply) => {
        const result = await controller.deletePartnerOrganization(app, request);
        return reply.send(result);
    });
};
exports.default = PartnerOrganizationRoutes;
