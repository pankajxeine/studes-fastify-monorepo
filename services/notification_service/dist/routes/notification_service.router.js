"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotificationServiceService_1 = require("../services/NotificationServiceService");
const NotificationServiceRoutes = async (app) => {
    const controller = new NotificationServiceService_1.NotificationServiceService();
    app.get('/health', async (request, reply) => {
        return await controller.notificationHealth(app, request);
    });
    app.get('/health/db', async (request, reply) => {
        return await controller.notificationHealthDb(app, request);
    });
    app.get('/notifications', async (request, reply) => {
        return await controller.listNotifications(app, request);
    });
    app.post('/notifications', async (request, reply) => {
        return await controller.createNotification(app, request.body, request);
    });
};
exports.default = NotificationServiceRoutes;
