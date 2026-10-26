"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DailyMenuService_1 = require("../../services/canteen/daily_menu/DailyMenuService");
const DailyMenuRoutes = async (app) => {
    const controller = new DailyMenuService_1.DailyMenuService();
    app.get('/daily_menu', async (request, reply) => {
        const result = await controller.listDailyMenu(app, request);
        return reply.send(result);
    });
    app.post('/daily_menu', async (request, reply) => {
        const result = await controller.createDailyMenu(app, request.body, request);
        return reply.send(result);
    });
    app.get('/daily_menu/:id', async (request, reply) => {
        const result = await controller.getDailyMenuById(app, request);
        return reply.send(result);
    });
    app.put('/daily_menu/:id', async (request, reply) => {
        const result = await controller.updateDailyMenu(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/daily_menu/:id', async (request, reply) => {
        const result = await controller.deleteDailyMenu(app, request);
        return reply.send(result);
    });
};
exports.default = DailyMenuRoutes;
