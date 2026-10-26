"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MealPlanPeriodService_1 = require("../../services/canteen/meal_plan_period/MealPlanPeriodService");
const MealPlanPeriodRoutes = async (app) => {
    const controller = new MealPlanPeriodService_1.MealPlanPeriodService();
    app.get('/meal_plan_period', async (request, reply) => {
        const result = await controller.listMealPlanPeriod(app, request);
        return reply.send(result);
    });
    app.post('/meal_plan_period', async (request, reply) => {
        const result = await controller.createMealPlanPeriod(app, request.body, request);
        return reply.send(result);
    });
    app.get('/meal_plan_period/:id', async (request, reply) => {
        const result = await controller.getMealPlanPeriodById(app, request);
        return reply.send(result);
    });
    app.put('/meal_plan_period/:id', async (request, reply) => {
        const result = await controller.updateMealPlanPeriod(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/meal_plan_period/:id', async (request, reply) => {
        const result = await controller.deleteMealPlanPeriod(app, request);
        return reply.send(result);
    });
};
exports.default = MealPlanPeriodRoutes;
