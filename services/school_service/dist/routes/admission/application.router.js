"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationService_1 = require("../../services/admission/application/ApplicationService");
const ApplicationRoutes = async (app) => {
    const controller = new ApplicationService_1.ApplicationService();
    app.get('/application', async (request, reply) => {
        const result = await controller.listApplication(app, request);
        return reply.send(result);
    });
    app.post('/application', async (request, reply) => {
        const result = await controller.createApplication(app, request.body, request);
        return reply.send(result);
    });
    app.get('/application/:id', async (request, reply) => {
        const result = await controller.getApplicationById(app, request);
        return reply.send(result);
    });
    app.put('/application/:id', async (request, reply) => {
        const result = await controller.updateApplication(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/application/:id', async (request, reply) => {
        const result = await controller.deleteApplication(app, request);
        return reply.send(result);
    });
};
exports.default = ApplicationRoutes;
