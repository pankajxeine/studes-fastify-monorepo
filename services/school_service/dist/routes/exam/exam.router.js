"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExamService_1 = require("../../services/exam/exam/ExamService");
const ExamRoutes = async (app) => {
    const controller = new ExamService_1.ExamService();
    app.get('/exam', async (request, reply) => {
        const result = await controller.listExam(app, request);
        return reply.send(result);
    });
    app.post('/exam', async (request, reply) => {
        const result = await controller.createExam(app, request.body, request);
        return reply.send(result);
    });
    app.get('/exam/:id', async (request, reply) => {
        const result = await controller.getExamById(app, request);
        return reply.send(result);
    });
    app.put('/exam/:id', async (request, reply) => {
        const result = await controller.updateExam(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/exam/:id', async (request, reply) => {
        const result = await controller.deleteExam(app, request);
        return reply.send(result);
    });
};
exports.default = ExamRoutes;
