"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TransportService_1 = require("../services/TransportService");
const TransportRoutes = async (app) => {
    const controller = new TransportService_1.TransportService();
    app.get('/transport/routes', async (request, reply) => {
        return await controller.listTransportRoutes(app, request);
    });
    app.post('/transport/routes', async (request, reply) => {
        return await controller.createTransportRoute(app, request.body, request);
    });
    app.post('/transport/vehicles', async (request, reply) => {
        return await controller.createTransportVehicle(app, request.body, request);
    });
    app.post('/transport/assignments', async (request, reply) => {
        return await controller.assignTransport(app, request.body, request);
    });
};
exports.default = TransportRoutes;
