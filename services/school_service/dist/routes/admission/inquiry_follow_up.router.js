"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InquiryFollowUpService_1 = require("../../services/admission/inquiry_follow_up/InquiryFollowUpService");
const InquiryFollowUpRoutes = async (app) => {
    const controller = new InquiryFollowUpService_1.InquiryFollowUpService();
    app.get('/inquiry_follow_up', async (request, reply) => {
        const result = await controller.listInquiryFollowUp(app, request);
        return reply.send(result);
    });
    app.post('/inquiry_follow_up', async (request, reply) => {
        const result = await controller.createInquiryFollowUp(app, request.body, request);
        return reply.send(result);
    });
    app.get('/inquiry_follow_up/:id', async (request, reply) => {
        const result = await controller.getInquiryFollowUpById(app, request);
        return reply.send(result);
    });
    app.put('/inquiry_follow_up/:id', async (request, reply) => {
        const result = await controller.updateInquiryFollowUp(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/inquiry_follow_up/:id', async (request, reply) => {
        const result = await controller.deleteInquiryFollowUp(app, request);
        return reply.send(result);
    });
};
exports.default = InquiryFollowUpRoutes;
