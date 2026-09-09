"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LeaveService_1 = require("../services/LeaveService");
const LeaveRoutes = async (app) => {
    const controller = new LeaveService_1.LeaveService();
    app.get('/leave', async (request, reply) => {
        return await controller.listLeaveRequests(app, request);
    });
    app.post('/leave', async (request, reply) => {
        return await controller.createLeaveRequest(app, request.body, request);
    });
};
exports.default = LeaveRoutes;
