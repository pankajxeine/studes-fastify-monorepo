"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotificationPreferenceService_1 = require("../../services/comms/notification_preference/NotificationPreferenceService");
const NotificationPreferenceRoutes = async (app) => {
    const controller = new NotificationPreferenceService_1.NotificationPreferenceService();
    app.get('/notification_preference', async (request, reply) => {
        const result = await controller.listNotificationPreference(app, request);
        return reply.send(result);
    });
    app.post('/notification_preference', async (request, reply) => {
        const result = await controller.createNotificationPreference(app, request.body, request);
        return reply.send(result);
    });
    app.get('/notification_preference/:id', async (request, reply) => {
        const result = await controller.getNotificationPreferenceById(app, request);
        return reply.send(result);
    });
    app.put('/notification_preference/:id', async (request, reply) => {
        const result = await controller.updateNotificationPreference(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/notification_preference/:id', async (request, reply) => {
        const result = await controller.deleteNotificationPreference(app, request);
        return reply.send(result);
    });
};
exports.default = NotificationPreferenceRoutes;
