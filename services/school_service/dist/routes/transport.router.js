"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TransportService_1 = require("../services/transport/TransportService");
const TransportRoutes = async (app) => {
    const controller = new TransportService_1.TransportService();
    app.get('/transport/routes', async (request, reply) => {
        const result = await controller.listTransportRoutes(app, request);
        return reply.send(result);
    });
    app.post('/transport/routes', async (request, reply) => {
        const result = await controller.createTransportRoute(app, request.body, request);
        return reply.send(result);
    });
    app.post('/transport/vehicles', async (request, reply) => {
        const result = await controller.createTransportVehicle(app, request.body, request);
        return reply.send(result);
    });
    app.post('/transport/assignments', async (request, reply) => {
        const result = await controller.assignTransport(app, request.body, request);
        return reply.send(result);
    });
};
exports.default = TransportRoutes;
