"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MessageThreadService_1 = require("../../services/comms/message_thread/MessageThreadService");
const MessageThreadRoutes = async (app) => {
    const controller = new MessageThreadService_1.MessageThreadService();
    app.get('/message_thread', async (request, reply) => {
        const result = await controller.listMessageThread(app, request);
        return reply.send(result);
    });
    app.post('/message_thread', async (request, reply) => {
        const result = await controller.createMessageThread(app, request.body, request);
        return reply.send(result);
    });
    app.get('/message_thread/:id', async (request, reply) => {
        const result = await controller.getMessageThreadById(app, request);
        return reply.send(result);
    });
    app.put('/message_thread/:id', async (request, reply) => {
        const result = await controller.updateMessageThread(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/message_thread/:id', async (request, reply) => {
        const result = await controller.deleteMessageThread(app, request);
        return reply.send(result);
    });
};
exports.default = MessageThreadRoutes;
