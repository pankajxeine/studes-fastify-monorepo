"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DonationService_1 = require("../../services/alumni/donation/DonationService");
const DonationRoutes = async (app) => {
    const controller = new DonationService_1.DonationService();
    app.get('/donation', async (request, reply) => {
        const result = await controller.listDonation(app, request);
        return reply.send(result);
    });
    app.post('/donation', async (request, reply) => {
        const result = await controller.createDonation(app, request.body, request);
        return reply.send(result);
    });
    app.get('/donation/:id', async (request, reply) => {
        const result = await controller.getDonationById(app, request);
        return reply.send(result);
    });
    app.put('/donation/:id', async (request, reply) => {
        const result = await controller.updateDonation(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/donation/:id', async (request, reply) => {
        const result = await controller.deleteDonation(app, request);
        return reply.send(result);
    });
};
exports.default = DonationRoutes;
