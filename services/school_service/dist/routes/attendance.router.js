"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AttendanceService_1 = require("../services/attendance/AttendanceService");
const AttendanceRoutes = async (app) => {
    const controller = new AttendanceService_1.AttendanceService();
    app.post('/attendance/students', async (request, reply) => {
        const result = await controller.markStudentAttendance(app, request.body, request);
        return reply.send(result);
    });
    app.post('/attendance/staff', async (request, reply) => {
        const result = await controller.markStaffAttendance(app, request.body, request);
        return reply.send(result);
    });
};
exports.default = AttendanceRoutes;
