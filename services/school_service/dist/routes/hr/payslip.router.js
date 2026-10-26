"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PayslipService_1 = require("../../services/hr/payslip/PayslipService");
const PayslipRoutes = async (app) => {
    const controller = new PayslipService_1.PayslipService();
    app.get('/payslip', async (request, reply) => {
        const result = await controller.listPayslip(app, request);
        return reply.send(result);
    });
    app.post('/payslip', async (request, reply) => {
        const result = await controller.createPayslip(app, request.body, request);
        return reply.send(result);
    });
    app.get('/payslip/:id', async (request, reply) => {
        const result = await controller.getPayslipById(app, request);
        return reply.send(result);
    });
    app.put('/payslip/:id', async (request, reply) => {
        const result = await controller.updatePayslip(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/payslip/:id', async (request, reply) => {
        const result = await controller.deletePayslip(app, request);
        return reply.send(result);
    });
};
exports.default = PayslipRoutes;
