"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LeaveBalanceService_1 = require("../../services/hr/leave_balance/LeaveBalanceService");
const LeaveBalanceRoutes = async (app) => {
    const controller = new LeaveBalanceService_1.LeaveBalanceService();
    app.get('/leave_balance', async (request, reply) => {
        const result = await controller.listLeaveBalance(app, request);
        return reply.send(result);
    });
    app.post('/leave_balance', async (request, reply) => {
        const result = await controller.createLeaveBalance(app, request.body, request);
        return reply.send(result);
    });
    app.get('/leave_balance/:id', async (request, reply) => {
        const result = await controller.getLeaveBalanceById(app, request);
        return reply.send(result);
    });
    app.put('/leave_balance/:id', async (request, reply) => {
        const result = await controller.updateLeaveBalance(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/leave_balance/:id', async (request, reply) => {
        const result = await controller.deleteLeaveBalance(app, request);
        return reply.send(result);
    });
};
exports.default = LeaveBalanceRoutes;
