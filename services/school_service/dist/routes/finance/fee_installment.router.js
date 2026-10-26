"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FeeInstallmentService_1 = require("../../services/finance/fee_installment/FeeInstallmentService");
const FeeInstallmentRoutes = async (app) => {
    const controller = new FeeInstallmentService_1.FeeInstallmentService();
    app.get('/fee_installment', async (request, reply) => {
        const result = await controller.listFeeInstallment(app, request);
        return reply.send(result);
    });
    app.post('/fee_installment', async (request, reply) => {
        const result = await controller.createFeeInstallment(app, request.body, request);
        return reply.send(result);
    });
    app.get('/fee_installment/:id', async (request, reply) => {
        const result = await controller.getFeeInstallmentById(app, request);
        return reply.send(result);
    });
    app.put('/fee_installment/:id', async (request, reply) => {
        const result = await controller.updateFeeInstallment(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/fee_installment/:id', async (request, reply) => {
        const result = await controller.deleteFeeInstallment(app, request);
        return reply.send(result);
    });
};
exports.default = FeeInstallmentRoutes;
