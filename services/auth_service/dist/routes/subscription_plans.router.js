"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SubscriptionPlansService_1 = require("../services/cpanels/subscription_plans/SubscriptionPlansService");
const SubscriptionPlansRoutes = async (app) => {
    const controller = new SubscriptionPlansService_1.SubscriptionPlansService();
    app.get('/subscription_plans', async (request, reply) => {
        return await reply.send(controller.listSubscriptionPlans(app, request));
    });
    app.post('/subscription_plans', async (request, reply) => {
        return await reply.send(controller.createSubscriptionPlan(app, request.body, request));
    });
    app.get('/subscription_plans/:id', async (request, reply) => {
        return await reply.send(controller.getSubscriptionPlansById(app, request));
    });
    app.put('/subscription_plans/:id', async (request, reply) => {
        return await reply.send(controller.updateSubscriptionPlan(app, request.body, request));
    });
    app.delete('/subscription_plans/:id', async (request, reply) => {
        return await reply.send(controller.deleteSubscriptionPlan(app, request));
    });
};
exports.default = SubscriptionPlansRoutes;
