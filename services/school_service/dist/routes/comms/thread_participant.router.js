"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ThreadParticipantService_1 = require("../../services/comms/thread_participant/ThreadParticipantService");
const ThreadParticipantRoutes = async (app) => {
    const controller = new ThreadParticipantService_1.ThreadParticipantService();
    app.get('/thread_participant', async (request, reply) => {
        const result = await controller.listThreadParticipant(app, request);
        return reply.send(result);
    });
    app.post('/thread_participant', async (request, reply) => {
        const result = await controller.createThreadParticipant(app, request.body, request);
        return reply.send(result);
    });
    app.get('/thread_participant/:id', async (request, reply) => {
        const result = await controller.getThreadParticipantById(app, request);
        return reply.send(result);
    });
    app.put('/thread_participant/:id', async (request, reply) => {
        const result = await controller.updateThreadParticipant(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/thread_participant/:id', async (request, reply) => {
        const result = await controller.deleteThreadParticipant(app, request);
        return reply.send(result);
    });
};
exports.default = ThreadParticipantRoutes;
