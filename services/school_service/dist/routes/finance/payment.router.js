"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PaymentService_1 = require("../../services/finance/payment/PaymentService");
const PaymentRoutes = async (app) => {
    const controller = new PaymentService_1.PaymentService();
    app.get('/payment', async (request, reply) => {
        const result = await controller.listPayment(app, request);
        return reply.send(result);
    });
    app.post('/payment', async (request, reply) => {
        const result = await controller.createPayment(app, request.body, request);
        return reply.send(result);
    });
    app.get('/payment/:id', async (request, reply) => {
        const result = await controller.getPaymentById(app, request);
        return reply.send(result);
    });
    app.put('/payment/:id', async (request, reply) => {
        const result = await controller.updatePayment(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/payment/:id', async (request, reply) => {
        const result = await controller.deletePayment(app, request);
        return reply.send(result);
    });
};
exports.default = PaymentRoutes;
