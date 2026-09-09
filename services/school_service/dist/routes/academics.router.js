"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AcademicsService_1 = require("../services/AcademicsService");
const AcademicsRoutes = async (app) => {
    const controller = new AcademicsService_1.AcademicsService();
    app.get('/courses', async (request, reply) => {
        return await controller.listCourses(app, request);
    });
    app.post('/courses', async (request, reply) => {
        return await controller.createCourse(app, request.body, request);
    });
    app.get('/offerings', async (request, reply) => {
        return await controller.listOfferings(app, request);
    });
    app.post('/offerings', async (request, reply) => {
        return await controller.createOffering(app, request.body, request);
    });
    app.post('/enrollments', async (request, reply) => {
        return await controller.createEnrollment(app, request.body, request);
    });
};
exports.default = AcademicsRoutes;
