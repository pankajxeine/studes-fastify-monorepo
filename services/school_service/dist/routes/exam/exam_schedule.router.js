"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExamScheduleService_1 = require("../../services/exam/exam_schedule/ExamScheduleService");
const ExamScheduleRoutes = async (app) => {
    const controller = new ExamScheduleService_1.ExamScheduleService();
    app.get('/exam_schedule', async (request, reply) => {
        const result = await controller.listExamSchedule(app, request);
        return reply.send(result);
    });
    app.post('/exam_schedule', async (request, reply) => {
        const result = await controller.createExamSchedule(app, request.body, request);
        return reply.send(result);
    });
    app.get('/exam_schedule/:id', async (request, reply) => {
        const result = await controller.getExamScheduleById(app, request);
        return reply.send(result);
    });
    app.put('/exam_schedule/:id', async (request, reply) => {
        const result = await controller.updateExamSchedule(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/exam_schedule/:id', async (request, reply) => {
        const result = await controller.deleteExamSchedule(app, request);
        return reply.send(result);
    });
};
exports.default = ExamScheduleRoutes;
