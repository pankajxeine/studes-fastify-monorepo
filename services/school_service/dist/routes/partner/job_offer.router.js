"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JobOfferService_1 = require("../../services/partner/job_offer/JobOfferService");
const JobOfferRoutes = async (app) => {
    const controller = new JobOfferService_1.JobOfferService();
    app.get('/job_offer', async (request, reply) => {
        const result = await controller.listJobOffer(app, request);
        return reply.send(result);
    });
    app.post('/job_offer', async (request, reply) => {
        const result = await controller.createJobOffer(app, request.body, request);
        return reply.send(result);
    });
    app.get('/job_offer/:id', async (request, reply) => {
        const result = await controller.getJobOfferById(app, request);
        return reply.send(result);
    });
    app.put('/job_offer/:id', async (request, reply) => {
        const result = await controller.updateJobOffer(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/job_offer/:id', async (request, reply) => {
        const result = await controller.deleteJobOffer(app, request);
        return reply.send(result);
    });
};
exports.default = JobOfferRoutes;
