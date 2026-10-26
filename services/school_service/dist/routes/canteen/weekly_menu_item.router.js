"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WeeklyMenuItemService_1 = require("../../services/canteen/weekly_menu_item/WeeklyMenuItemService");
const WeeklyMenuItemRoutes = async (app) => {
    const controller = new WeeklyMenuItemService_1.WeeklyMenuItemService();
    app.get('/weekly_menu_item', async (request, reply) => {
        const result = await controller.listWeeklyMenuItem(app, request);
        return reply.send(result);
    });
    app.post('/weekly_menu_item', async (request, reply) => {
        const result = await controller.createWeeklyMenuItem(app, request.body, request);
        return reply.send(result);
    });
    app.get('/weekly_menu_item/:id', async (request, reply) => {
        const result = await controller.getWeeklyMenuItemById(app, request);
        return reply.send(result);
    });
    app.put('/weekly_menu_item/:id', async (request, reply) => {
        const result = await controller.updateWeeklyMenuItem(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/weekly_menu_item/:id', async (request, reply) => {
        const result = await controller.deleteWeeklyMenuItem(app, request);
        return reply.send(result);
    });
};
exports.default = WeeklyMenuItemRoutes;
