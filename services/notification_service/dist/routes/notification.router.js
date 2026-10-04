"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotificationService_1 = require("../services/notification/NotificationService");
const NotificationRoutes = async (app) => {
    const controller = new NotificationService_1.NotificationService();
    app.get('/health', async (request, reply) => {
        const result = await controller.notificationHealth(app, request);
        return reply.send(result);
    });
    app.get('/health/db', async (request, reply) => {
        const result = await controller.notificationHealthDb(app, request);
        return reply.send(result);
    });
    app.get('/notifications', async (request, reply) => {
        const result = await controller.listNotifications(app, request);
        return reply.send(result);
    });
    app.post('/notifications', async (request, reply) => {
        const result = await controller.createNotification(app, request.body, request);
        return reply.send(result);
    });
};
exports.default = NotificationRoutes;
