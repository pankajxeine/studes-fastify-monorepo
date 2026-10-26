"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MealPeriodService_1 = require("../../services/canteen/meal_period/MealPeriodService");
const MealPeriodRoutes = async (app) => {
    const controller = new MealPeriodService_1.MealPeriodService();
    app.get('/meal_period', async (request, reply) => {
        const result = await controller.listMealPeriod(app, request);
        return reply.send(result);
    });
    app.post('/meal_period', async (request, reply) => {
        const result = await controller.createMealPeriod(app, request.body, request);
        return reply.send(result);
    });
    app.get('/meal_period/:id', async (request, reply) => {
        const result = await controller.getMealPeriodById(app, request);
        return reply.send(result);
    });
    app.put('/meal_period/:id', async (request, reply) => {
        const result = await controller.updateMealPeriod(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/meal_period/:id', async (request, reply) => {
        const result = await controller.deleteMealPeriod(app, request);
        return reply.send(result);
    });
};
exports.default = MealPeriodRoutes;
