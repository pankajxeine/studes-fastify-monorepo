"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EnvironmentsService_1 = require("../services/cpanels/environments/EnvironmentsService");
const EnvironmentsRoutes = async (app) => {
    const controller = new EnvironmentsService_1.EnvironmentsService();
    app.get('/environments', async (request, reply) => {
        return await reply.send(controller.listEnvironments(app, request));
    });
    app.post('/environments', async (request, reply) => {
        return await reply.send(controller.createEnvironment(app, request.body, request));
    });
    app.get('/environments/:id', async (request, reply) => {
        return await reply.send(controller.getEnvironmentsById(app, request));
    });
    app.put('/environments/:id', async (request, reply) => {
        return await reply.send(controller.updateEnvironment(app, request.body, request));
    });
    app.delete('/environments/:id', async (request, reply) => {
        return await reply.send(controller.deleteEnvironment(app, request));
    });
};
exports.default = EnvironmentsRoutes;
