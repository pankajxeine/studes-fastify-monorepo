"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SubsService_1 = require("../services/cpanels/subs/SubsService");
const SubsRoutes = async (app) => {
    const controller = new SubsService_1.SubsService();
    app.get('/subs', async (request, reply) => {
        return await reply.send(controller.listSubs(app, request));
    });
    app.post('/subs', async (request, reply) => {
        return await reply.send(controller.createSub(app, request.body, request));
    });
    app.get('/subs/:id', async (request, reply) => {
        return await reply.send(controller.getSubsById(app, request));
    });
    app.put('/subs/:id', async (request, reply) => {
        return await reply.send(controller.updateSub(app, request.body, request));
    });
    app.delete('/subs/:id', async (request, reply) => {
        return await reply.send(controller.deleteSub(app, request));
    });
};
exports.default = SubsRoutes;
