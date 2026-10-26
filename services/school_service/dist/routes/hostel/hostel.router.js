"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HostelService_1 = require("../../services/hostel/hostel/HostelService");
const HostelRoutes = async (app) => {
    const controller = new HostelService_1.HostelService();
    app.get('/hostel', async (request, reply) => {
        const result = await controller.listHostel(app, request);
        return reply.send(result);
    });
    app.post('/hostel', async (request, reply) => {
        const result = await controller.createHostel(app, request.body, request);
        return reply.send(result);
    });
    app.get('/hostel/:id', async (request, reply) => {
        const result = await controller.getHostelById(app, request);
        return reply.send(result);
    });
    app.put('/hostel/:id', async (request, reply) => {
        const result = await controller.updateHostel(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/hostel/:id', async (request, reply) => {
        const result = await controller.deleteHostel(app, request);
        return reply.send(result);
    });
};
exports.default = HostelRoutes;
