"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RefundService_1 = require("../../services/finance/refund/RefundService");
const RefundRoutes = async (app) => {
    const controller = new RefundService_1.RefundService();
    app.get('/refund', async (request, reply) => {
        const result = await controller.listRefund(app, request);
        return reply.send(result);
    });
    app.post('/refund', async (request, reply) => {
        const result = await controller.createRefund(app, request.body, request);
        return reply.send(result);
    });
    app.get('/refund/:id', async (request, reply) => {
        const result = await controller.getRefundById(app, request);
        return reply.send(result);
    });
    app.put('/refund/:id', async (request, reply) => {
        const result = await controller.updateRefund(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/refund/:id', async (request, reply) => {
        const result = await controller.deleteRefund(app, request);
        return reply.send(result);
    });
};
exports.default = RefundRoutes;
