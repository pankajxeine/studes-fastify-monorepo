"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CourseOfferingService_1 = require("../../services/academic/course_offering/CourseOfferingService");
const CourseOfferingRoutes = async (app) => {
    const controller = new CourseOfferingService_1.CourseOfferingService();
    app.get('/course_offering', async (request, reply) => {
        const result = await controller.listCourseOffering(app, request);
        return reply.send(result);
    });
    app.post('/course_offering', async (request, reply) => {
        const result = await controller.createCourseOffering(app, request.body, request);
        return reply.send(result);
    });
    app.get('/course_offering/:id', async (request, reply) => {
        const result = await controller.getCourseOfferingById(app, request);
        return reply.send(result);
    });
    app.put('/course_offering/:id', async (request, reply) => {
        const result = await controller.updateCourseOffering(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/course_offering/:id', async (request, reply) => {
        const result = await controller.deleteCourseOffering(app, request);
        return reply.send(result);
    });
};
exports.default = CourseOfferingRoutes;
