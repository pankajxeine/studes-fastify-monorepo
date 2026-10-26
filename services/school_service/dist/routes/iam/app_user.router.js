"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppUserService_1 = require("../../services/iam/app_user/AppUserService");
const AppUserRoutes = async (app) => {
    const controller = new AppUserService_1.AppUserService();
    app.get('/app_user', async (request, reply) => {
        const result = await controller.listAppUser(app, request);
        return reply.send(result);
    });
    app.post('/app_user', async (request, reply) => {
        const result = await controller.createAppUser(app, request.body, request);
        return reply.send(result);
    });
    app.get('/app_user/:id', async (request, reply) => {
        const result = await controller.getAppUserById(app, request);
        return reply.send(result);
    });
    app.put('/app_user/:id', async (request, reply) => {
        const result = await controller.updateAppUser(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/app_user/:id', async (request, reply) => {
        const result = await controller.deleteAppUser(app, request);
        return reply.send(result);
    });
};
exports.default = AppUserRoutes;
