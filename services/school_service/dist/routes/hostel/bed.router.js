"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BedService_1 = require("../../services/hostel/bed/BedService");
const BedRoutes = async (app) => {
    const controller = new BedService_1.BedService();
    app.get('/bed', async (request, reply) => {
        const result = await controller.listBed(app, request);
        return reply.send(result);
    });
    app.post('/bed', async (request, reply) => {
        const result = await controller.createBed(app, request.body, request);
        return reply.send(result);
    });
    app.get('/bed/:id', async (request, reply) => {
        const result = await controller.getBedById(app, request);
        return reply.send(result);
    });
    app.put('/bed/:id', async (request, reply) => {
        const result = await controller.updateBed(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/bed/:id', async (request, reply) => {
        const result = await controller.deleteBed(app, request);
        return reply.send(result);
    });
};
exports.default = BedRoutes;
