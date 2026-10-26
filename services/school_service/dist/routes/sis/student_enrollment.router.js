"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StudentEnrollmentService_1 = require("../../services/sis/student_enrollment/StudentEnrollmentService");
const StudentEnrollmentRoutes = async (app) => {
    const controller = new StudentEnrollmentService_1.StudentEnrollmentService();
    app.get('/student_enrollment', async (request, reply) => {
        const result = await controller.listStudentEnrollment(app, request);
        return reply.send(result);
    });
    app.post('/student_enrollment', async (request, reply) => {
        const result = await controller.createStudentEnrollment(app, request.body, request);
        return reply.send(result);
    });
    app.get('/student_enrollment/:id', async (request, reply) => {
        const result = await controller.getStudentEnrollmentById(app, request);
        return reply.send(result);
    });
    app.put('/student_enrollment/:id', async (request, reply) => {
        const result = await controller.updateStudentEnrollment(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/student_enrollment/:id', async (request, reply) => {
        const result = await controller.deleteStudentEnrollment(app, request);
        return reply.send(result);
    });
};
exports.default = StudentEnrollmentRoutes;
