"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SettingService_1 = require("../../services/org/setting/SettingService");
const SettingRoutes = async (app) => {
    const controller = new SettingService_1.SettingService();
    app.get('/setting', async (request, reply) => {
        const result = await controller.listSetting(app, request);
        return reply.send(result);
    });
    app.post('/setting', async (request, reply) => {
        const result = await controller.createSetting(app, request.body, request);
        return reply.send(result);
    });
    app.get('/setting/:id', async (request, reply) => {
        const result = await controller.getSettingById(app, request);
        return reply.send(result);
    });
    app.put('/setting/:id', async (request, reply) => {
        const result = await controller.updateSetting(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/setting/:id', async (request, reply) => {
        const result = await controller.deleteSetting(app, request);
        return reply.send(result);
    });
};
exports.default = SettingRoutes;
