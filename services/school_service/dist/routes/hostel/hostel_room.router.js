"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HostelRoomService_1 = require("../../services/hostel/hostel_room/HostelRoomService");
const HostelRoomRoutes = async (app) => {
    const controller = new HostelRoomService_1.HostelRoomService();
    app.get('/hostel_room', async (request, reply) => {
        const result = await controller.listHostelRoom(app, request);
        return reply.send(result);
    });
    app.post('/hostel_room', async (request, reply) => {
        const result = await controller.createHostelRoom(app, request.body, request);
        return reply.send(result);
    });
    app.get('/hostel_room/:id', async (request, reply) => {
        const result = await controller.getHostelRoomById(app, request);
        return reply.send(result);
    });
    app.put('/hostel_room/:id', async (request, reply) => {
        const result = await controller.updateHostelRoom(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/hostel_room/:id', async (request, reply) => {
        const result = await controller.deleteHostelRoom(app, request);
        return reply.send(result);
    });
};
exports.default = HostelRoomRoutes;
