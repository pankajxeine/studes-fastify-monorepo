"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LeaveTypeService_1 = require("../../services/hr/leave_type/LeaveTypeService");
const LeaveTypeRoutes = async (app) => {
    const controller = new LeaveTypeService_1.LeaveTypeService();
    app.get('/leave_type', async (request, reply) => {
        const result = await controller.listLeaveType(app, request);
        return reply.send(result);
    });
    app.post('/leave_type', async (request, reply) => {
        const result = await controller.createLeaveType(app, request.body, request);
        return reply.send(result);
    });
    app.get('/leave_type/:id', async (request, reply) => {
        const result = await controller.getLeaveTypeById(app, request);
        return reply.send(result);
    });
    app.put('/leave_type/:id', async (request, reply) => {
        const result = await controller.updateLeaveType(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/leave_type/:id', async (request, reply) => {
        const result = await controller.deleteLeaveType(app, request);
        return reply.send(result);
    });
};
exports.default = LeaveTypeRoutes;
