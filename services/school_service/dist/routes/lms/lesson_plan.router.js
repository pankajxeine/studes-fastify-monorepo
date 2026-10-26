"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LessonPlanService_1 = require("../../services/lms/lesson_plan/LessonPlanService");
const LessonPlanRoutes = async (app) => {
    const controller = new LessonPlanService_1.LessonPlanService();
    app.get('/lesson_plan', async (request, reply) => {
        const result = await controller.listLessonPlan(app, request);
        return reply.send(result);
    });
    app.post('/lesson_plan', async (request, reply) => {
        const result = await controller.createLessonPlan(app, request.body, request);
        return reply.send(result);
    });
    app.get('/lesson_plan/:id', async (request, reply) => {
        const result = await controller.getLessonPlanById(app, request);
        return reply.send(result);
    });
    app.put('/lesson_plan/:id', async (request, reply) => {
        const result = await controller.updateLessonPlan(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/lesson_plan/:id', async (request, reply) => {
        const result = await controller.deleteLessonPlan(app, request);
        return reply.send(result);
    });
};
exports.default = LessonPlanRoutes;
