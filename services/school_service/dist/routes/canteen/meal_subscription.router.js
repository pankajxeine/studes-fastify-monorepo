"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MealSubscriptionService_1 = require("../../services/canteen/meal_subscription/MealSubscriptionService");
const MealSubscriptionRoutes = async (app) => {
    const controller = new MealSubscriptionService_1.MealSubscriptionService();
    app.get('/meal_subscription', async (request, reply) => {
        const result = await controller.listMealSubscription(app, request);
        return reply.send(result);
    });
    app.post('/meal_subscription', async (request, reply) => {
        const result = await controller.createMealSubscription(app, request.body, request);
        return reply.send(result);
    });
    app.get('/meal_subscription/:id', async (request, reply) => {
        const result = await controller.getMealSubscriptionById(app, request);
        return reply.send(result);
    });
    app.put('/meal_subscription/:id', async (request, reply) => {
        const result = await controller.updateMealSubscription(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/meal_subscription/:id', async (request, reply) => {
        const result = await controller.deleteMealSubscription(app, request);
        return reply.send(result);
    });
};
exports.default = MealSubscriptionRoutes;
