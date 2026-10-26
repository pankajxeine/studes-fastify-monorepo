"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PartnerTypeService_1 = require("../../services/partner/partner_type/PartnerTypeService");
const PartnerTypeRoutes = async (app) => {
    const controller = new PartnerTypeService_1.PartnerTypeService();
    app.get('/partner_type', async (request, reply) => {
        const result = await controller.listPartnerType(app, request);
        return reply.send(result);
    });
    app.post('/partner_type', async (request, reply) => {
        const result = await controller.createPartnerType(app, request.body, request);
        return reply.send(result);
    });
    app.get('/partner_type/:id', async (request, reply) => {
        const result = await controller.getPartnerTypeById(app, request);
        return reply.send(result);
    });
    app.put('/partner_type/:id', async (request, reply) => {
        const result = await controller.updatePartnerType(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/partner_type/:id', async (request, reply) => {
        const result = await controller.deletePartnerType(app, request);
        return reply.send(result);
    });
};
exports.default = PartnerTypeRoutes;
