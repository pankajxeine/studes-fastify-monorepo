"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WeeklyMenuService_1 = require("../../services/canteen/weekly_menu/WeeklyMenuService");
const WeeklyMenuRoutes = async (app) => {
    const controller = new WeeklyMenuService_1.WeeklyMenuService();
    app.get('/weekly_menu', async (request, reply) => {
        const result = await controller.listWeeklyMenu(app, request);
        return reply.send(result);
    });
    app.post('/weekly_menu', async (request, reply) => {
        const result = await controller.createWeeklyMenu(app, request.body, request);
        return reply.send(result);
    });
    app.get('/weekly_menu/:id', async (request, reply) => {
        const result = await controller.getWeeklyMenuById(app, request);
        return reply.send(result);
    });
    app.put('/weekly_menu/:id', async (request, reply) => {
        const result = await controller.updateWeeklyMenu(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/weekly_menu/:id', async (request, reply) => {
        const result = await controller.deleteWeeklyMenu(app, request);
        return reply.send(result);
    });
};
exports.default = WeeklyMenuRoutes;
