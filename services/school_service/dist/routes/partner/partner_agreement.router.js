"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PartnerAgreementService_1 = require("../../services/partner/partner_agreement/PartnerAgreementService");
const PartnerAgreementRoutes = async (app) => {
    const controller = new PartnerAgreementService_1.PartnerAgreementService();
    app.get('/partner_agreement', async (request, reply) => {
        const result = await controller.listPartnerAgreement(app, request);
        return reply.send(result);
    });
    app.post('/partner_agreement', async (request, reply) => {
        const result = await controller.createPartnerAgreement(app, request.body, request);
        return reply.send(result);
    });
    app.get('/partner_agreement/:id', async (request, reply) => {
        const result = await controller.getPartnerAgreementById(app, request);
        return reply.send(result);
    });
    app.put('/partner_agreement/:id', async (request, reply) => {
        const result = await controller.updatePartnerAgreement(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/partner_agreement/:id', async (request, reply) => {
        const result = await controller.deletePartnerAgreement(app, request);
        return reply.send(result);
    });
};
exports.default = PartnerAgreementRoutes;
