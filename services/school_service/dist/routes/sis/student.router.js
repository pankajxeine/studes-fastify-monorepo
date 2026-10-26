"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StudentService_1 = require("../../services/sis/student/StudentService");
const StudentRoutes = async (app) => {
    const controller = new StudentService_1.StudentService();
    app.get('/student', async (request, reply) => {
        const result = await controller.listStudent(app, request);
        return reply.send(result);
    });
    app.post('/student', async (request, reply) => {
        const result = await controller.createStudent(app, request.body, request);
        return reply.send(result);
    });
    app.get('/student/:id', async (request, reply) => {
        const result = await controller.getStudentById(app, request);
        return reply.send(result);
    });
    app.put('/student/:id', async (request, reply) => {
        const result = await controller.updateStudent(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/student/:id', async (request, reply) => {
        const result = await controller.deleteStudent(app, request);
        return reply.send(result);
    });
};
exports.default = StudentRoutes;
