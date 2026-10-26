"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RoomTypeService_1 = require("../../services/org/room_type/RoomTypeService");
const RoomTypeRoutes = async (app) => {
    const controller = new RoomTypeService_1.RoomTypeService();
    app.get('/room_type', async (request, reply) => {
        const result = await controller.listRoomType(app, request);
        return reply.send(result);
    });
    app.post('/room_type', async (request, reply) => {
        const result = await controller.createRoomType(app, request.body, request);
        return reply.send(result);
    });
    app.get('/room_type/:id', async (request, reply) => {
        const result = await controller.getRoomTypeById(app, request);
        return reply.send(result);
    });
    app.put('/room_type/:id', async (request, reply) => {
        const result = await controller.updateRoomType(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/room_type/:id', async (request, reply) => {
        const result = await controller.deleteRoomType(app, request);
        return reply.send(result);
    });
};
exports.default = RoomTypeRoutes;
