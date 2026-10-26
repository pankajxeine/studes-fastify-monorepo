"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PayrollRunService_1 = require("../../services/hr/payroll_run/PayrollRunService");
const PayrollRunRoutes = async (app) => {
    const controller = new PayrollRunService_1.PayrollRunService();
    app.get('/payroll_run', async (request, reply) => {
        const result = await controller.listPayrollRun(app, request);
        return reply.send(result);
    });
    app.post('/payroll_run', async (request, reply) => {
        const result = await controller.createPayrollRun(app, request.body, request);
        return reply.send(result);
    });
    app.get('/payroll_run/:id', async (request, reply) => {
        const result = await controller.getPayrollRunById(app, request);
        return reply.send(result);
    });
    app.put('/payroll_run/:id', async (request, reply) => {
        const result = await controller.updatePayrollRun(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/payroll_run/:id', async (request, reply) => {
        const result = await controller.deletePayrollRun(app, request);
        return reply.send(result);
    });
};
exports.default = PayrollRunRoutes;
