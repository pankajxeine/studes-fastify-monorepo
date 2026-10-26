"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AlumniHigherEducationService_1 = require("../../services/alumni/alumni_higher_education/AlumniHigherEducationService");
const AlumniHigherEducationRoutes = async (app) => {
    const controller = new AlumniHigherEducationService_1.AlumniHigherEducationService();
    app.get('/alumni_higher_education', async (request, reply) => {
        const result = await controller.listAlumniHigherEducation(app, request);
        return reply.send(result);
    });
    app.post('/alumni_higher_education', async (request, reply) => {
        const result = await controller.createAlumniHigherEducation(app, request.body, request);
        return reply.send(result);
    });
    app.get('/alumni_higher_education/:id', async (request, reply) => {
        const result = await controller.getAlumniHigherEducationById(app, request);
        return reply.send(result);
    });
    app.put('/alumni_higher_education/:id', async (request, reply) => {
        const result = await controller.updateAlumniHigherEducation(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/alumni_higher_education/:id', async (request, reply) => {
        const result = await controller.deleteAlumniHigherEducation(app, request);
        return reply.send(result);
    });
};
exports.default = AlumniHigherEducationRoutes;
