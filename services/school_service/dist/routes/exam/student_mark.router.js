"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StudentMarkService_1 = require("../../services/exam/student_mark/StudentMarkService");
const StudentMarkRoutes = async (app) => {
    const controller = new StudentMarkService_1.StudentMarkService();
    app.get('/student_mark', async (request, reply) => {
        const result = await controller.listStudentMark(app, request);
        return reply.send(result);
    });
    app.post('/student_mark', async (request, reply) => {
        const result = await controller.createStudentMark(app, request.body, request);
        return reply.send(result);
    });
    app.get('/student_mark/:id', async (request, reply) => {
        const result = await controller.getStudentMarkById(app, request);
        return reply.send(result);
    });
    app.put('/student_mark/:id', async (request, reply) => {
        const result = await controller.updateStudentMark(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/student_mark/:id', async (request, reply) => {
        const result = await controller.deleteStudentMark(app, request);
        return reply.send(result);
    });
};
exports.default = StudentMarkRoutes;
