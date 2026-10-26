"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PreviousEducationService_1 = require("../../services/sis/previous_education/PreviousEducationService");
const PreviousEducationRoutes = async (app) => {
    const controller = new PreviousEducationService_1.PreviousEducationService();
    app.get('/previous_education', async (request, reply) => {
        const result = await controller.listPreviousEducation(app, request);
        return reply.send(result);
    });
    app.post('/previous_education', async (request, reply) => {
        const result = await controller.createPreviousEducation(app, request.body, request);
        return reply.send(result);
    });
    app.get('/previous_education/:id', async (request, reply) => {
        const result = await controller.getPreviousEducationById(app, request);
        return reply.send(result);
    });
    app.put('/previous_education/:id', async (request, reply) => {
        const result = await controller.updatePreviousEducation(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/previous_education/:id', async (request, reply) => {
        const result = await controller.deletePreviousEducation(app, request);
        return reply.send(result);
    });
};
exports.default = PreviousEducationRoutes;
