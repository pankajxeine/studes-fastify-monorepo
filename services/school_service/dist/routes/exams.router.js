"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExamsService_1 = require("../services/exams/ExamsService");
const ExamsRoutes = async (app) => {
    const controller = new ExamsService_1.ExamsService();
    app.get('/exams', async (request, reply) => {
        const result = await controller.listExams(app, request);
        return reply.send(result);
    });
    app.post('/exams', async (request, reply) => {
        const result = await controller.createExam(app, request.body, request);
        return reply.send(result);
    });
    app.post('/exams/:id/results', async (request, reply) => {
        const result = await controller.recordExamResult(app, request.body, request);
        return reply.send(result);
    });
};
exports.default = ExamsRoutes;
