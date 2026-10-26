"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserSessionService_1 = require("../../services/iam/user_session/UserSessionService");
const UserSessionRoutes = async (app) => {
    const controller = new UserSessionService_1.UserSessionService();
    app.get('/user_session', async (request, reply) => {
        const result = await controller.listUserSession(app, request);
        return reply.send(result);
    });
    app.post('/user_session', async (request, reply) => {
        const result = await controller.createUserSession(app, request.body, request);
        return reply.send(result);
    });
    app.get('/user_session/:id', async (request, reply) => {
        const result = await controller.getUserSessionById(app, request);
        return reply.send(result);
    });
    app.put('/user_session/:id', async (request, reply) => {
        const result = await controller.updateUserSession(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/user_session/:id', async (request, reply) => {
        const result = await controller.deleteUserSession(app, request);
        return reply.send(result);
    });
};
exports.default = UserSessionRoutes;
