"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReservationService_1 = require("../../services/library/reservation/ReservationService");
const ReservationRoutes = async (app) => {
    const controller = new ReservationService_1.ReservationService();
    app.get('/reservation', async (request, reply) => {
        const result = await controller.listReservation(app, request);
        return reply.send(result);
    });
    app.post('/reservation', async (request, reply) => {
        const result = await controller.createReservation(app, request.body, request);
        return reply.send(result);
    });
    app.get('/reservation/:id', async (request, reply) => {
        const result = await controller.getReservationById(app, request);
        return reply.send(result);
    });
    app.put('/reservation/:id', async (request, reply) => {
        const result = await controller.updateReservation(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/reservation/:id', async (request, reply) => {
        const result = await controller.deleteReservation(app, request);
        return reply.send(result);
    });
};
exports.default = ReservationRoutes;
