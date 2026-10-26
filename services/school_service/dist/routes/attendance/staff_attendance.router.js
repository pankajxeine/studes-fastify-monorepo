"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StaffAttendanceService_1 = require("../../services/attendance/staff_attendance/StaffAttendanceService");
const StaffAttendanceRoutes = async (app) => {
    const controller = new StaffAttendanceService_1.StaffAttendanceService();
    app.get('/staff_attendance', async (request, reply) => {
        const result = await controller.listStaffAttendance(app, request);
        return reply.send(result);
    });
    app.post('/staff_attendance', async (request, reply) => {
        const result = await controller.createStaffAttendance(app, request.body, request);
        return reply.send(result);
    });
    app.get('/staff_attendance/:id', async (request, reply) => {
        const result = await controller.getStaffAttendanceById(app, request);
        return reply.send(result);
    });
    app.put('/staff_attendance/:id', async (request, reply) => {
        const result = await controller.updateStaffAttendance(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/staff_attendance/:id', async (request, reply) => {
        const result = await controller.deleteStaffAttendance(app, request);
        return reply.send(result);
    });
};
exports.default = StaffAttendanceRoutes;
