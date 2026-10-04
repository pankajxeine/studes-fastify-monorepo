"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotificationsService_1 = require("../services/notifications/NotificationsService");
const NotificationsRoutes = async (app) => {
    const controller = new NotificationsService_1.NotificationsService();
    app.get('/notifications', async (request, reply) => {
        const result = await controller.listNotifications(app, request);
        return reply.send(result);
    });
    app.post('/notifications', async (request, reply) => {
        const result = await controller.createNotification(app, request.body, request);
        return reply.send(result);
    });
};
exports.default = NotificationsRoutes;
