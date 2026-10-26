"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StudentLeaveRequestService_1 = require("../../services/attendance/student_leave_request/StudentLeaveRequestService");
const StudentLeaveRequestRoutes = async (app) => {
    const controller = new StudentLeaveRequestService_1.StudentLeaveRequestService();
    app.get('/student_leave_request', async (request, reply) => {
        const result = await controller.listStudentLeaveRequest(app, request);
        return reply.send(result);
    });
    app.post('/student_leave_request', async (request, reply) => {
        const result = await controller.createStudentLeaveRequest(app, request.body, request);
        return reply.send(result);
    });
    app.get('/student_leave_request/:id', async (request, reply) => {
        const result = await controller.getStudentLeaveRequestById(app, request);
        return reply.send(result);
    });
    app.put('/student_leave_request/:id', async (request, reply) => {
        const result = await controller.updateStudentLeaveRequest(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/student_leave_request/:id', async (request, reply) => {
        const result = await controller.deleteStudentLeaveRequest(app, request);
        return reply.send(result);
    });
};
exports.default = StudentLeaveRequestRoutes;
