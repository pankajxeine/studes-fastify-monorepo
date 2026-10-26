"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PartnerContactService_1 = require("../../services/partner/partner_contact/PartnerContactService");
const PartnerContactRoutes = async (app) => {
    const controller = new PartnerContactService_1.PartnerContactService();
    app.get('/partner_contact', async (request, reply) => {
        const result = await controller.listPartnerContact(app, request);
        return reply.send(result);
    });
    app.post('/partner_contact', async (request, reply) => {
        const result = await controller.createPartnerContact(app, request.body, request);
        return reply.send(result);
    });
    app.get('/partner_contact/:id', async (request, reply) => {
        const result = await controller.getPartnerContactById(app, request);
        return reply.send(result);
    });
    app.put('/partner_contact/:id', async (request, reply) => {
        const result = await controller.updatePartnerContact(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/partner_contact/:id', async (request, reply) => {
        const result = await controller.deletePartnerContact(app, request);
        return reply.send(result);
    });
};
exports.default = PartnerContactRoutes;
