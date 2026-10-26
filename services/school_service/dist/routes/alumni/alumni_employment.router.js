"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AlumniEmploymentService_1 = require("../../services/alumni/alumni_employment/AlumniEmploymentService");
const AlumniEmploymentRoutes = async (app) => {
    const controller = new AlumniEmploymentService_1.AlumniEmploymentService();
    app.get('/alumni_employment', async (request, reply) => {
        const result = await controller.listAlumniEmployment(app, request);
        return reply.send(result);
    });
    app.post('/alumni_employment', async (request, reply) => {
        const result = await controller.createAlumniEmployment(app, request.body, request);
        return reply.send(result);
    });
    app.get('/alumni_employment/:id', async (request, reply) => {
        const result = await controller.getAlumniEmploymentById(app, request);
        return reply.send(result);
    });
    app.put('/alumni_employment/:id', async (request, reply) => {
        const result = await controller.updateAlumniEmployment(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/alumni_employment/:id', async (request, reply) => {
        const result = await controller.deleteAlumniEmployment(app, request);
        return reply.send(result);
    });
};
exports.default = AlumniEmploymentRoutes;
