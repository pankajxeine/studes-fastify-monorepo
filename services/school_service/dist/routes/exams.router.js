"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExamsService_1 = require("../services/ExamsService");
const ExamsRoutes = async (app) => {
    const controller = new ExamsService_1.ExamsService();
    app.get('/exams', async (request, reply) => {
        return await controller.listExams(app, request);
    });
    app.post('/exams', async (request, reply) => {
        return await controller.createExam(app, request.body, request);
    });
    app.post('/exams/:id/results', async (request, reply) => {
        return await controller.recordExamResult(app, request.body, request);
    });
};
exports.default = ExamsRoutes;
