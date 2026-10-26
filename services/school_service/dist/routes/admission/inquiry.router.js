"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InquiryService_1 = require("../../services/admission/inquiry/InquiryService");
const InquiryRoutes = async (app) => {
    const controller = new InquiryService_1.InquiryService();
    app.get('/inquiry', async (request, reply) => {
        const result = await controller.listInquiry(app, request);
        return reply.send(result);
    });
    app.post('/inquiry', async (request, reply) => {
        const result = await controller.createInquiry(app, request.body, request);
        return reply.send(result);
    });
    app.get('/inquiry/:id', async (request, reply) => {
        const result = await controller.getInquiryById(app, request);
        return reply.send(result);
    });
    app.put('/inquiry/:id', async (request, reply) => {
        const result = await controller.updateInquiry(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/inquiry/:id', async (request, reply) => {
        const result = await controller.deleteInquiry(app, request);
        return reply.send(result);
    });
};
exports.default = InquiryRoutes;
