"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DonationCampaignService_1 = require("../../services/alumni/donation_campaign/DonationCampaignService");
const DonationCampaignRoutes = async (app) => {
    const controller = new DonationCampaignService_1.DonationCampaignService();
    app.get('/donation_campaign', async (request, reply) => {
        const result = await controller.listDonationCampaign(app, request);
        return reply.send(result);
    });
    app.post('/donation_campaign', async (request, reply) => {
        const result = await controller.createDonationCampaign(app, request.body, request);
        return reply.send(result);
    });
    app.get('/donation_campaign/:id', async (request, reply) => {
        const result = await controller.getDonationCampaignById(app, request);
        return reply.send(result);
    });
    app.put('/donation_campaign/:id', async (request, reply) => {
        const result = await controller.updateDonationCampaign(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/donation_campaign/:id', async (request, reply) => {
        const result = await controller.deleteDonationCampaign(app, request);
        return reply.send(result);
    });
};
exports.default = DonationCampaignRoutes;
