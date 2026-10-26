"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProgramService_1 = require("../../services/academic/program/ProgramService");
const ProgramRoutes = async (app) => {
    const controller = new ProgramService_1.ProgramService();
    app.get('/program', async (request, reply) => {
        const result = await controller.listProgram(app, request);
        return reply.send(result);
    });
    app.post('/program', async (request, reply) => {
        const result = await controller.createProgram(app, request.body, request);
        return reply.send(result);
    });
    app.get('/program/:id', async (request, reply) => {
        const result = await controller.getProgramById(app, request);
        return reply.send(result);
    });
    app.put('/program/:id', async (request, reply) => {
        const result = await controller.updateProgram(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/program/:id', async (request, reply) => {
        const result = await controller.deleteProgram(app, request);
        return reply.send(result);
    });
};
exports.default = ProgramRoutes;
