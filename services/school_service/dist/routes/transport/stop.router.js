"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StopService_1 = require("../../services/transport/stop/StopService");
const StopRoutes = async (app) => {
    const controller = new StopService_1.StopService();
    app.get('/stop', async (request, reply) => {
        const result = await controller.listStop(app, request);
        return reply.send(result);
    });
    app.post('/stop', async (request, reply) => {
        const result = await controller.createStop(app, request.body, request);
        return reply.send(result);
    });
    app.get('/stop/:id', async (request, reply) => {
        const result = await controller.getStopById(app, request);
        return reply.send(result);
    });
    app.put('/stop/:id', async (request, reply) => {
        const result = await controller.updateStop(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/stop/:id', async (request, reply) => {
        const result = await controller.deleteStop(app, request);
        return reply.send(result);
    });
};
exports.default = StopRoutes;
