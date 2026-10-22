"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SalesAgentsService_1 = require("../services/cpanel/sales_agents/SalesAgentsService");
const SalesAgentsRoutes = async (app) => {
    const controller = new SalesAgentsService_1.SalesAgentsService();
    app.get('/sales_agents', async (request, reply) => {
        const result = await controller.listSalesAgents(app, request);
        return reply.send(result);
    });
    app.post('/sales_agents', async (request, reply) => {
        const result = await controller.createSalesAgent(app, request.body, request);
        return reply.send(result);
    });
    app.get('/sales_agents/:id', async (request, reply) => {
        const result = await controller.getSalesAgentsById(app, request);
        return reply.send(result);
    });
    app.put('/sales_agents/:id', async (request, reply) => {
        const result = await controller.updateSalesAgent(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/sales_agents/:id', async (request, reply) => {
        const result = await controller.deleteSalesAgent(app, request);
        return reply.send(result);
    });
};
exports.default = SalesAgentsRoutes;
