"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotificationService_1 = require("../../services/comms/notification/NotificationService");
const NotificationRoutes = async (app) => {
    const controller = new NotificationService_1.NotificationService();
    app.get('/notification', async (request, reply) => {
        const result = await controller.listNotification(app, request);
        return reply.send(result);
    });
    app.post('/notification', async (request, reply) => {
        const result = await controller.createNotification(app, request.body, request);
        return reply.send(result);
    });
    app.get('/notification/:id', async (request, reply) => {
        const result = await controller.getNotificationById(app, request);
        return reply.send(result);
    });
    app.put('/notification/:id', async (request, reply) => {
        const result = await controller.updateNotification(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/notification/:id', async (request, reply) => {
        const result = await controller.deleteNotification(app, request);
        return reply.send(result);
    });
};
exports.default = NotificationRoutes;
