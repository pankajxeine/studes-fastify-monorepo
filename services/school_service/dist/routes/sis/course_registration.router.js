"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CourseRegistrationService_1 = require("../../services/sis/course_registration/CourseRegistrationService");
const CourseRegistrationRoutes = async (app) => {
    const controller = new CourseRegistrationService_1.CourseRegistrationService();
    app.get('/course_registration', async (request, reply) => {
        const result = await controller.listCourseRegistration(app, request);
        return reply.send(result);
    });
    app.post('/course_registration', async (request, reply) => {
        const result = await controller.createCourseRegistration(app, request.body, request);
        return reply.send(result);
    });
    app.get('/course_registration/:id', async (request, reply) => {
        const result = await controller.getCourseRegistrationById(app, request);
        return reply.send(result);
    });
    app.put('/course_registration/:id', async (request, reply) => {
        const result = await controller.updateCourseRegistration(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/course_registration/:id', async (request, reply) => {
        const result = await controller.deleteCourseRegistration(app, request);
        return reply.send(result);
    });
};
exports.default = CourseRegistrationRoutes;
