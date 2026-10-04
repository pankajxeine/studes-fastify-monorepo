"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmailSettingsService_1 = require("../services/email_settings/EmailSettingsService");
const EmailSettingsRoutes = async (app) => {
    const controller = new EmailSettingsService_1.EmailSettingsService();
    app.get('/email/settings', async (request, reply) => {
        const result = await controller.getEmailSettings(app, request);
        return reply.send(result);
    });
    app.put('/email/settings', async (request, reply) => {
        const result = await controller.updateEmailSettings(app, request.body, request);
        return reply.send(result);
    });
};
exports.default = EmailSettingsRoutes;
