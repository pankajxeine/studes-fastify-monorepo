"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TermService_1 = require("../../services/academic/term/TermService");
const TermRoutes = async (app) => {
    const controller = new TermService_1.TermService();
    app.get('/term', async (request, reply) => {
        const result = await controller.listTerm(app, request);
        return reply.send(result);
    });
    app.post('/term', async (request, reply) => {
        const result = await controller.createTerm(app, request.body, request);
        return reply.send(result);
    });
    app.get('/term/:id', async (request, reply) => {
        const result = await controller.getTermById(app, request);
        return reply.send(result);
    });
    app.put('/term/:id', async (request, reply) => {
        const result = await controller.updateTerm(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/term/:id', async (request, reply) => {
        const result = await controller.deleteTerm(app, request);
        return reply.send(result);
    });
};
exports.default = TermRoutes;
