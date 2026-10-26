"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TripLogService_1 = require("../../services/transport/trip_log/TripLogService");
const TripLogRoutes = async (app) => {
    const controller = new TripLogService_1.TripLogService();
    app.get('/trip_log', async (request, reply) => {
        const result = await controller.listTripLog(app, request);
        return reply.send(result);
    });
    app.post('/trip_log', async (request, reply) => {
        const result = await controller.createTripLog(app, request.body, request);
        return reply.send(result);
    });
    app.get('/trip_log/:id', async (request, reply) => {
        const result = await controller.getTripLogById(app, request);
        return reply.send(result);
    });
    app.put('/trip_log/:id', async (request, reply) => {
        const result = await controller.updateTripLog(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/trip_log/:id', async (request, reply) => {
        const result = await controller.deleteTripLog(app, request);
        return reply.send(result);
    });
};
exports.default = TripLogRoutes;
