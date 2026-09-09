"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AttendanceService_1 = require("../services/AttendanceService");
const AttendanceRoutes = async (app) => {
    const controller = new AttendanceService_1.AttendanceService();
    app.post('/attendance/students', async (request, reply) => {
        return await controller.markStudentAttendance(app, request.body, request);
    });
    app.post('/attendance/staff', async (request, reply) => {
        return await controller.markStaffAttendance(app, request.body, request);
    });
};
exports.default = AttendanceRoutes;
