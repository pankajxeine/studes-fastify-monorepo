"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DailyMenuItemService_1 = require("../../services/canteen/daily_menu_item/DailyMenuItemService");
const DailyMenuItemRoutes = async (app) => {
    const controller = new DailyMenuItemService_1.DailyMenuItemService();
    app.get('/daily_menu_item', async (request, reply) => {
        const result = await controller.listDailyMenuItem(app, request);
        return reply.send(result);
    });
    app.post('/daily_menu_item', async (request, reply) => {
        const result = await controller.createDailyMenuItem(app, request.body, request);
        return reply.send(result);
    });
    app.get('/daily_menu_item/:id', async (request, reply) => {
        const result = await controller.getDailyMenuItemById(app, request);
        return reply.send(result);
    });
    app.put('/daily_menu_item/:id', async (request, reply) => {
        const result = await controller.updateDailyMenuItem(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/daily_menu_item/:id', async (request, reply) => {
        const result = await controller.deleteDailyMenuItem(app, request);
        return reply.send(result);
    });
};
exports.default = DailyMenuItemRoutes;
