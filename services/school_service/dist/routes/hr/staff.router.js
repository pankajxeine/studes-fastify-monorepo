"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StaffService_1 = require("../../services/hr/staff/StaffService");
const StaffRoutes = async (app) => {
    const controller = new StaffService_1.StaffService();
    app.get('/staff', async (request, reply) => {
        const result = await controller.listStaff(app, request);
        return reply.send(result);
    });
    app.post('/staff', async (request, reply) => {
        const result = await controller.createStaff(app, request.body, request);
        return reply.send(result);
    });
    app.get('/staff/:id', async (request, reply) => {
        const result = await controller.getStaffById(app, request);
        return reply.send(result);
    });
    app.put('/staff/:id', async (request, reply) => {
        const result = await controller.updateStaff(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/staff/:id', async (request, reply) => {
        const result = await controller.deleteStaff(app, request);
        return reply.send(result);
    });
};
exports.default = StaffRoutes;
