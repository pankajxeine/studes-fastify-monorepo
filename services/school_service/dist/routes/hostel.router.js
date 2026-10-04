"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HostelService_1 = require("../services/hostel/HostelService");
const HostelRoutes = async (app) => {
    const controller = new HostelService_1.HostelService();
    app.get('/hostel/rooms', async (request, reply) => {
        const result = await controller.listHostelRooms(app, request);
        return reply.send(result);
    });
    app.post('/hostel/rooms', async (request, reply) => {
        const result = await controller.createHostelRoom(app, request.body, request);
        return reply.send(result);
    });
    app.post('/hostel/allocations', async (request, reply) => {
        const result = await controller.allocateHostelRoom(app, request.body, request);
        return reply.send(result);
    });
};
exports.default = HostelRoutes;
