"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GuestService_1 = require("../../services/visitor/guest/GuestService");
const GuestRoutes = async (app) => {
    const controller = new GuestService_1.GuestService();
    app.get('/guest', async (request, reply) => {
        const result = await controller.listGuest(app, request);
        return reply.send(result);
    });
    app.post('/guest', async (request, reply) => {
        const result = await controller.createGuest(app, request.body, request);
        return reply.send(result);
    });
    app.get('/guest/:id', async (request, reply) => {
        const result = await controller.getGuestById(app, request);
        return reply.send(result);
    });
    app.put('/guest/:id', async (request, reply) => {
        const result = await controller.updateGuest(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/guest/:id', async (request, reply) => {
        const result = await controller.deleteGuest(app, request);
        return reply.send(result);
    });
};
exports.default = GuestRoutes;
