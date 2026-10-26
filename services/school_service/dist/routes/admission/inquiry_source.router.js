"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InquirySourceService_1 = require("../../services/admission/inquiry_source/InquirySourceService");
const InquirySourceRoutes = async (app) => {
    const controller = new InquirySourceService_1.InquirySourceService();
    app.get('/inquiry_source', async (request, reply) => {
        const result = await controller.listInquirySource(app, request);
        return reply.send(result);
    });
    app.post('/inquiry_source', async (request, reply) => {
        const result = await controller.createInquirySource(app, request.body, request);
        return reply.send(result);
    });
    app.get('/inquiry_source/:id', async (request, reply) => {
        const result = await controller.getInquirySourceById(app, request);
        return reply.send(result);
    });
    app.put('/inquiry_source/:id', async (request, reply) => {
        const result = await controller.updateInquirySource(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/inquiry_source/:id', async (request, reply) => {
        const result = await controller.deleteInquirySource(app, request);
        return reply.send(result);
    });
};
exports.default = InquirySourceRoutes;
