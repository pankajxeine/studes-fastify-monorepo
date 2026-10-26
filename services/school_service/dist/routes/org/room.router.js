"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RoomService_1 = require("../../services/org/room/RoomService");
const RoomRoutes = async (app) => {
    const controller = new RoomService_1.RoomService();
    app.get('/room', async (request, reply) => {
        const result = await controller.listRoom(app, request);
        return reply.send(result);
    });
    app.post('/room', async (request, reply) => {
        const result = await controller.createRoom(app, request.body, request);
        return reply.send(result);
    });
    app.get('/room/:id', async (request, reply) => {
        const result = await controller.getRoomById(app, request);
        return reply.send(result);
    });
    app.put('/room/:id', async (request, reply) => {
        const result = await controller.updateRoom(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/room/:id', async (request, reply) => {
        const result = await controller.deleteRoom(app, request);
        return reply.send(result);
    });
};
exports.default = RoomRoutes;
