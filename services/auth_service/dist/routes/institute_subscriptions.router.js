"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InstituteSubscriptionsService_1 = require("../services/cpanels/institute_subscriptions/InstituteSubscriptionsService");
const InstituteSubscriptionsRoutes = async (app) => {
    const controller = new InstituteSubscriptionsService_1.InstituteSubscriptionsService();
    app.get('/institute_subscriptions', async (request, reply) => {
        return await reply.send(controller.listInstituteSubscriptions(app, request));
    });
    app.post('/institute_subscriptions', async (request, reply) => {
        return await reply.send(controller.createInstituteSubscription(app, request.body, request));
    });
    app.get('/institute_subscriptions/:id', async (request, reply) => {
        return await reply.send(controller.getInstituteSubscriptionsById(app, request));
    });
    app.put('/institute_subscriptions/:id', async (request, reply) => {
        return await reply.send(controller.updateInstituteSubscription(app, request.body, request));
    });
    app.delete('/institute_subscriptions/:id', async (request, reply) => {
        return await reply.send(controller.deleteInstituteSubscription(app, request));
    });
};
exports.default = InstituteSubscriptionsRoutes;
