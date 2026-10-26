"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RoomBookingService_1 = require("../../services/events/room_booking/RoomBookingService");
const RoomBookingRoutes = async (app) => {
    const controller = new RoomBookingService_1.RoomBookingService();
    app.get('/room_booking', async (request, reply) => {
        const result = await controller.listRoomBooking(app, request);
        return reply.send(result);
    });
    app.post('/room_booking', async (request, reply) => {
        const result = await controller.createRoomBooking(app, request.body, request);
        return reply.send(result);
    });
    app.get('/room_booking/:id', async (request, reply) => {
        const result = await controller.getRoomBookingById(app, request);
        return reply.send(result);
    });
    app.put('/room_booking/:id', async (request, reply) => {
        const result = await controller.updateRoomBooking(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/room_booking/:id', async (request, reply) => {
        const result = await controller.deleteRoomBooking(app, request);
        return reply.send(result);
    });
};
exports.default = RoomBookingRoutes;
