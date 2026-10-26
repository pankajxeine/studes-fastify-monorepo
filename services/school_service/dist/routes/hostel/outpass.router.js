"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OutpassService_1 = require("../../services/hostel/outpass/OutpassService");
const OutpassRoutes = async (app) => {
    const controller = new OutpassService_1.OutpassService();
    app.get('/outpass', async (request, reply) => {
        const result = await controller.listOutpass(app, request);
        return reply.send(result);
    });
    app.post('/outpass', async (request, reply) => {
        const result = await controller.createOutpass(app, request.body, request);
        return reply.send(result);
    });
    app.get('/outpass/:id', async (request, reply) => {
        const result = await controller.getOutpassById(app, request);
        return reply.send(result);
    });
    app.put('/outpass/:id', async (request, reply) => {
        const result = await controller.updateOutpass(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/outpass/:id', async (request, reply) => {
        const result = await controller.deleteOutpass(app, request);
        return reply.send(result);
    });
};
exports.default = OutpassRoutes;
