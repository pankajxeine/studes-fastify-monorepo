"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StudentAttendanceService_1 = require("../../services/attendance/student_attendance/StudentAttendanceService");
const StudentAttendanceRoutes = async (app) => {
    const controller = new StudentAttendanceService_1.StudentAttendanceService();
    app.get('/student_attendance', async (request, reply) => {
        const result = await controller.listStudentAttendance(app, request);
        return reply.send(result);
    });
    app.post('/student_attendance', async (request, reply) => {
        const result = await controller.createStudentAttendance(app, request.body, request);
        return reply.send(result);
    });
    app.get('/student_attendance/:id', async (request, reply) => {
        const result = await controller.getStudentAttendanceById(app, request);
        return reply.send(result);
    });
    app.put('/student_attendance/:id', async (request, reply) => {
        const result = await controller.updateStudentAttendance(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/student_attendance/:id', async (request, reply) => {
        const result = await controller.deleteStudentAttendance(app, request);
        return reply.send(result);
    });
};
exports.default = StudentAttendanceRoutes;
