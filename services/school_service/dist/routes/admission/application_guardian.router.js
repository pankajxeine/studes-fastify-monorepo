"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationGuardianService_1 = require("../../services/admission/application_guardian/ApplicationGuardianService");
const ApplicationGuardianRoutes = async (app) => {
    const controller = new ApplicationGuardianService_1.ApplicationGuardianService();
    app.get('/application_guardian', async (request, reply) => {
        const result = await controller.listApplicationGuardian(app, request);
        return reply.send(result);
    });
    app.post('/application_guardian', async (request, reply) => {
        const result = await controller.createApplicationGuardian(app, request.body, request);
        return reply.send(result);
    });
    app.get('/application_guardian/:id', async (request, reply) => {
        const result = await controller.getApplicationGuardianById(app, request);
        return reply.send(result);
    });
    app.put('/application_guardian/:id', async (request, reply) => {
        const result = await controller.updateApplicationGuardian(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/application_guardian/:id', async (request, reply) => {
        const result = await controller.deleteApplicationGuardian(app, request);
        return reply.send(result);
    });
};
exports.default = ApplicationGuardianRoutes;
