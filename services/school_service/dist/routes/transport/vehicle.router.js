"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VehicleService_1 = require("../../services/transport/vehicle/VehicleService");
const VehicleRoutes = async (app) => {
    const controller = new VehicleService_1.VehicleService();
    app.get('/vehicle', async (request, reply) => {
        const result = await controller.listVehicle(app, request);
        return reply.send(result);
    });
    app.post('/vehicle', async (request, reply) => {
        const result = await controller.createVehicle(app, request.body, request);
        return reply.send(result);
    });
    app.get('/vehicle/:id', async (request, reply) => {
        const result = await controller.getVehicleById(app, request);
        return reply.send(result);
    });
    app.put('/vehicle/:id', async (request, reply) => {
        const result = await controller.updateVehicle(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/vehicle/:id', async (request, reply) => {
        const result = await controller.deleteVehicle(app, request);
        return reply.send(result);
    });
};
exports.default = VehicleRoutes;
