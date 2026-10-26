"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SponsorshipService_1 = require("../../services/partner/sponsorship/SponsorshipService");
const SponsorshipRoutes = async (app) => {
    const controller = new SponsorshipService_1.SponsorshipService();
    app.get('/sponsorship', async (request, reply) => {
        const result = await controller.listSponsorship(app, request);
        return reply.send(result);
    });
    app.post('/sponsorship', async (request, reply) => {
        const result = await controller.createSponsorship(app, request.body, request);
        return reply.send(result);
    });
    app.get('/sponsorship/:id', async (request, reply) => {
        const result = await controller.getSponsorshipById(app, request);
        return reply.send(result);
    });
    app.put('/sponsorship/:id', async (request, reply) => {
        const result = await controller.updateSponsorship(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/sponsorship/:id', async (request, reply) => {
        const result = await controller.deleteSponsorship(app, request);
        return reply.send(result);
    });
};
exports.default = SponsorshipRoutes;
