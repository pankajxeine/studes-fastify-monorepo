"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PayslipLineService_1 = require("../../services/hr/payslip_line/PayslipLineService");
const PayslipLineRoutes = async (app) => {
    const controller = new PayslipLineService_1.PayslipLineService();
    app.get('/payslip_line', async (request, reply) => {
        const result = await controller.listPayslipLine(app, request);
        return reply.send(result);
    });
    app.post('/payslip_line', async (request, reply) => {
        const result = await controller.createPayslipLine(app, request.body, request);
        return reply.send(result);
    });
    app.get('/payslip_line/:id', async (request, reply) => {
        const result = await controller.getPayslipLineById(app, request);
        return reply.send(result);
    });
    app.put('/payslip_line/:id', async (request, reply) => {
        const result = await controller.updatePayslipLine(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/payslip_line/:id', async (request, reply) => {
        const result = await controller.deletePayslipLine(app, request);
        return reply.send(result);
    });
};
exports.default = PayslipLineRoutes;
