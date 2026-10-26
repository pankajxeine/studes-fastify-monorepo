"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StudentGuardianService_1 = require("../../services/sis/student_guardian/StudentGuardianService");
const StudentGuardianRoutes = async (app) => {
    const controller = new StudentGuardianService_1.StudentGuardianService();
    app.get('/student_guardian', async (request, reply) => {
        const result = await controller.listStudentGuardian(app, request);
        return reply.send(result);
    });
    app.post('/student_guardian', async (request, reply) => {
        const result = await controller.createStudentGuardian(app, request.body, request);
        return reply.send(result);
    });
    app.get('/student_guardian/:id', async (request, reply) => {
        const result = await controller.getStudentGuardianById(app, request);
        return reply.send(result);
    });
    app.put('/student_guardian/:id', async (request, reply) => {
        const result = await controller.updateStudentGuardian(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/student_guardian/:id', async (request, reply) => {
        const result = await controller.deleteStudentGuardian(app, request);
        return reply.send(result);
    });
};
exports.default = StudentGuardianRoutes;
