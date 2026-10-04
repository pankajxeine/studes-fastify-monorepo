"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SalesAgentsService_1 = require("../services/sales_agents/SalesAgentsService");
const SalesAgentsRoutes = async (app) => {
    const controller = new SalesAgentsService_1.SalesAgentsService();
    app.get('/sales/agents', async (request, reply) => {
        const result = await controller.listSalesAgents(app, request);
        return reply.send(result);
    });
    app.post('/sales/agents', async (request, reply) => {
        const result = await controller.createSalesAgent(app, request.body, request);
        return reply.send(result);
    });
    app.patch('/sales/agents/:agentId', async (request, reply) => {
        const result = await controller.updateSalesAgent(app, request.body, request);
        return reply.send(result);
    });
};
exports.default = SalesAgentsRoutes;
