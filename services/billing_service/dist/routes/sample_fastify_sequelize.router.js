"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SampleFastifySequelizeService_1 = require("../services/sample_fastify_sequelize/SampleFastifySequelizeService");
const SampleFastifySequelizeRoutes = async (app) => {
    const controller = new SampleFastifySequelizeService_1.SampleFastifySequelizeService();
    app.get('/users', async (request, reply) => {
        const result = await controller.getUsers(app, request);
        return reply.send(result);
    });
    app.post('/users', async (request, reply) => {
        const result = await controller.postUsers(app, request.body, request);
        return reply.send(result);
    });
    app.get('/health', async (request, reply) => {
        const result = await controller.getHealth(app, request);
        return reply.send(result);
    });
    app.post('/login', async (request, reply) => {
        const result = await controller.postLogin(app, request.body, request);
        return reply.send(result);
    });
    app.post('/logout', async (request, reply) => {
        const result = await controller.postLogout(app, request);
        return reply.send(result);
    });
};
exports.default = SampleFastifySequelizeRoutes;
