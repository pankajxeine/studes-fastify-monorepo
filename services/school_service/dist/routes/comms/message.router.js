"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MessageService_1 = require("../../services/comms/message/MessageService");
const MessageRoutes = async (app) => {
    const controller = new MessageService_1.MessageService();
    app.get('/message', async (request, reply) => {
        const result = await controller.listMessage(app, request);
        return reply.send(result);
    });
    app.post('/message', async (request, reply) => {
        const result = await controller.createMessage(app, request.body, request);
        return reply.send(result);
    });
    app.get('/message/:id', async (request, reply) => {
        const result = await controller.getMessageById(app, request);
        return reply.send(result);
    });
    app.put('/message/:id', async (request, reply) => {
        const result = await controller.updateMessage(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/message/:id', async (request, reply) => {
        const result = await controller.deleteMessage(app, request);
        return reply.send(result);
    });
};
exports.default = MessageRoutes;
