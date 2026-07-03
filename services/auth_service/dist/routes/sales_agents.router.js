"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SalesAgentsService_1 = require("../services/cpanels/sales_agents/SalesAgentsService");
const SalesAgentsRoutes = async (app) => {
    const controller = new SalesAgentsService_1.SalesAgentsService();
    app.get('/sales_agents', async (request, reply) => {
        return await reply.send(controller.listSalesAgents(app, request));
    });
    app.post('/sales_agents', async (request, reply) => {
        return await reply.send(controller.createSalesAgent(app, request.body, request));
    });
    app.get('/sales_agents/:id', async (request, reply) => {
        return await reply.send(controller.getSalesAgentsById(app, request));
    });
    app.put('/sales_agents/:id', async (request, reply) => {
        return await reply.send(controller.updateSalesAgent(app, request.body, request));
    });
    app.delete('/sales_agents/:id', async (request, reply) => {
        return await reply.send(controller.deleteSalesAgent(app, request));
    });
};
exports.default = SalesAgentsRoutes;
