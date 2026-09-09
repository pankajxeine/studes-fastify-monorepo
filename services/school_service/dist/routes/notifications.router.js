"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotificationsService_1 = require("../services/NotificationsService");
const NotificationsRoutes = async (app) => {
    const controller = new NotificationsService_1.NotificationsService();
    app.get('/notifications', async (request, reply) => {
        return await controller.listNotifications(app, request);
    });
    app.post('/notifications', async (request, reply) => {
        return await controller.createNotification(app, request.body, request);
    });
};
exports.default = NotificationsRoutes;
