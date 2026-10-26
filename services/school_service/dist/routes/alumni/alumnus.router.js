"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AlumnusService_1 = require("../../services/alumni/alumnus/AlumnusService");
const AlumnusRoutes = async (app) => {
    const controller = new AlumnusService_1.AlumnusService();
    app.get('/alumnus', async (request, reply) => {
        const result = await controller.listAlumnus(app, request);
        return reply.send(result);
    });
    app.post('/alumnus', async (request, reply) => {
        const result = await controller.createAlumnus(app, request.body, request);
        return reply.send(result);
    });
    app.get('/alumnus/:id', async (request, reply) => {
        const result = await controller.getAlumnusById(app, request);
        return reply.send(result);
    });
    app.put('/alumnus/:id', async (request, reply) => {
        const result = await controller.updateAlumnus(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/alumnus/:id', async (request, reply) => {
        const result = await controller.deleteAlumnus(app, request);
        return reply.send(result);
    });
};
exports.default = AlumnusRoutes;
