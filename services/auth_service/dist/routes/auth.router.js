"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AuthService_1 = require("../services/auth/AuthService");
const AuthRoutes = async (app) => {
    const controller = new AuthService_1.AuthService();
    app.post('/auth/login', async (request, reply) => {
        return await reply.send(controller.authLogin(app, request.body, request));
    });
    app.post('/auth/refresh', async (request, reply) => {
        return await reply.send(controller.authRefresh(app, request.body, request));
    });
    app.post('/auth/logout', async (request, reply) => {
        return await reply.send(controller.authLogout(app, request));
    });
    app.post('/auth/register', async (request, reply) => {
        return await reply.send(controller.authRegister(app, request.body, request));
    });
};
exports.default = AuthRoutes;
