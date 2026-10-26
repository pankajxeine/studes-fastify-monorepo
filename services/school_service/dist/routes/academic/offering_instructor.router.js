"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OfferingInstructorService_1 = require("../../services/academic/offering_instructor/OfferingInstructorService");
const OfferingInstructorRoutes = async (app) => {
    const controller = new OfferingInstructorService_1.OfferingInstructorService();
    app.get('/offering_instructor', async (request, reply) => {
        const result = await controller.listOfferingInstructor(app, request);
        return reply.send(result);
    });
    app.post('/offering_instructor', async (request, reply) => {
        const result = await controller.createOfferingInstructor(app, request.body, request);
        return reply.send(result);
    });
    app.get('/offering_instructor/:id', async (request, reply) => {
        const result = await controller.getOfferingInstructorById(app, request);
        return reply.send(result);
    });
    app.put('/offering_instructor/:id', async (request, reply) => {
        const result = await controller.updateOfferingInstructor(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/offering_instructor/:id', async (request, reply) => {
        const result = await controller.deleteOfferingInstructor(app, request);
        return reply.send(result);
    });
};
exports.default = OfferingInstructorRoutes;
