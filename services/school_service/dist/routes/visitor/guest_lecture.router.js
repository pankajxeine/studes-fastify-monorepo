"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GuestLectureService_1 = require("../../services/visitor/guest_lecture/GuestLectureService");
const GuestLectureRoutes = async (app) => {
    const controller = new GuestLectureService_1.GuestLectureService();
    app.get('/guest_lecture', async (request, reply) => {
        const result = await controller.listGuestLecture(app, request);
        return reply.send(result);
    });
    app.post('/guest_lecture', async (request, reply) => {
        const result = await controller.createGuestLecture(app, request.body, request);
        return reply.send(result);
    });
    app.get('/guest_lecture/:id', async (request, reply) => {
        const result = await controller.getGuestLectureById(app, request);
        return reply.send(result);
    });
    app.put('/guest_lecture/:id', async (request, reply) => {
        const result = await controller.updateGuestLecture(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/guest_lecture/:id', async (request, reply) => {
        const result = await controller.deleteGuestLecture(app, request);
        return reply.send(result);
    });
};
exports.default = GuestLectureRoutes;
