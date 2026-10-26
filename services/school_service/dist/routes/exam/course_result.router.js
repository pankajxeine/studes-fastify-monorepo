"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CourseResultService_1 = require("../../services/exam/course_result/CourseResultService");
const CourseResultRoutes = async (app) => {
    const controller = new CourseResultService_1.CourseResultService();
    app.get('/course_result', async (request, reply) => {
        const result = await controller.listCourseResult(app, request);
        return reply.send(result);
    });
    app.post('/course_result', async (request, reply) => {
        const result = await controller.createCourseResult(app, request.body, request);
        return reply.send(result);
    });
    app.get('/course_result/:id', async (request, reply) => {
        const result = await controller.getCourseResultById(app, request);
        return reply.send(result);
    });
    app.put('/course_result/:id', async (request, reply) => {
        const result = await controller.updateCourseResult(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/course_result/:id', async (request, reply) => {
        const result = await controller.deleteCourseResult(app, request);
        return reply.send(result);
    });
};
exports.default = CourseResultRoutes;
