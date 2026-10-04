"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LeaveService_1 = require("../services/leave/LeaveService");
const LeaveRoutes = async (app) => {
    const controller = new LeaveService_1.LeaveService();
    app.get('/leave', async (request, reply) => {
        const result = await controller.listLeaveRequests(app, request);
        return reply.send(result);
    });
    app.post('/leave', async (request, reply) => {
        const result = await controller.createLeaveRequest(app, request.body, request);
        return reply.send(result);
    });
};
exports.default = LeaveRoutes;
