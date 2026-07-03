"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IndustriesService_1 = require("../services/cpanels/industries/IndustriesService");
const IndustriesRoutes = async (app) => {
    const controller = new IndustriesService_1.IndustriesService();
    app.get('/industries', async (request, reply) => {
        return await reply.send(controller.listIndustries(app, request));
    });
    app.post('/industries', async (request, reply) => {
        return await reply.send(controller.createIndustrie(app, request.body, request));
    });
    app.get('/industries/:id', async (request, reply) => {
        return await reply.send(controller.getIndustriesById(app, request));
    });
    app.put('/industries/:id', async (request, reply) => {
        return await reply.send(controller.updateIndustrie(app, request.body, request));
    });
    app.delete('/industries/:id', async (request, reply) => {
        return await reply.send(controller.deleteIndustrie(app, request));
    });
};
exports.default = IndustriesRoutes;
