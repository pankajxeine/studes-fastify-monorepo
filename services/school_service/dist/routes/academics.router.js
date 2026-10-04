"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AcademicsService_1 = require("../services/academics/AcademicsService");
const AcademicsRoutes = async (app) => {
    const controller = new AcademicsService_1.AcademicsService();
    app.get('/courses', async (request, reply) => {
        const result = await controller.listCourses(app, request);
        return reply.send(result);
    });
    app.post('/courses', async (request, reply) => {
        const result = await controller.createCourse(app, request.body, request);
        return reply.send(result);
    });
    app.get('/offerings', async (request, reply) => {
        const result = await controller.listOfferings(app, request);
        return reply.send(result);
    });
    app.post('/offerings', async (request, reply) => {
        const result = await controller.createOffering(app, request.body, request);
        return reply.send(result);
    });
    app.post('/enrollments', async (request, reply) => {
        const result = await controller.createEnrollment(app, request.body, request);
        return reply.send(result);
    });
};
exports.default = AcademicsRoutes;
