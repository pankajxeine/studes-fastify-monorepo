"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HostelService_1 = require("../services/HostelService");
const HostelRoutes = async (app) => {
    const controller = new HostelService_1.HostelService();
    app.get('/hostel/rooms', async (request, reply) => {
        return await controller.listHostelRooms(app, request);
    });
    app.post('/hostel/rooms', async (request, reply) => {
        return await controller.createHostelRoom(app, request.body, request);
    });
    app.post('/hostel/allocations', async (request, reply) => {
        return await controller.allocateHostelRoom(app, request.body, request);
    });
};
exports.default = HostelRoutes;
