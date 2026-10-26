"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CourseService_1 = require("../../services/academic/course/CourseService");
const CourseRoutes = async (app) => {
    const controller = new CourseService_1.CourseService();
    app.get('/course', async (request, reply) => {
        const result = await controller.listCourse(app, request);
        return reply.send(result);
    });
    app.post('/course', async (request, reply) => {
        const result = await controller.createCourse(app, request.body, request);
        return reply.send(result);
    });
    app.get('/course/:id', async (request, reply) => {
        const result = await controller.getCourseById(app, request);
        return reply.send(result);
    });
    app.put('/course/:id', async (request, reply) => {
        const result = await controller.updateCourse(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/course/:id', async (request, reply) => {
        const result = await controller.deleteCourse(app, request);
        return reply.send(result);
    });
};
exports.default = CourseRoutes;
