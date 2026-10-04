"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SettingsService_1 = require("../services/settings/SettingsService");
const SettingsRoutes = async (app) => {
    const controller = new SettingsService_1.SettingsService();
    app.get('/settings/global', async (request, reply) => {
        const result = await controller.getGlobalSettings(app, request);
        return reply.send(result);
    });
    app.put('/settings/global', async (request, reply) => {
        const result = await controller.updateGlobalSettings(app, request.body, request);
        return reply.send(result);
    });
};
exports.default = SettingsRoutes;
