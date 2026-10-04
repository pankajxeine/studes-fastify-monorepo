"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiGatewayService_1 = require("../services/api_gateway/ApiGatewayService");
const ApiGatewayRoutes = async (app) => {
    const controller = new ApiGatewayService_1.ApiGatewayService();
    app.get('/health', async (request, reply) => {
        const result = await controller.gatewayHealth(app, request);
        return reply.send(result);
    });
    app.get('/health/services', async (request, reply) => {
        const result = await controller.gatewayHealthServices(app, request);
        return reply.send(result);
    });
    app.get('/health/db', async (request, reply) => {
        const result = await controller.gatewayHealthDb(app, request);
        return reply.send(result);
    });
    app.get('/metrics', async (request, reply) => {
        const result = await controller.gatewayMetrics(app, request);
        return reply.send(result);
    });
    app.post('/auth/register', async (request, reply) => {
        const result = await controller.gatewayAuthRegister(app, request.body, request);
        return reply.send(result);
    });
    app.post('/auth/login', async (request, reply) => {
        const result = await controller.gatewayAuthLogin(app, request.body, request);
        return reply.send(result);
    });
    app.post('/auth/logout', async (request, reply) => {
        const result = await controller.gatewayAuthLogout(app, request);
        return reply.send(result);
    });
    app.post('/tenants', async (request, reply) => {
        const result = await controller.gatewayCreateTenant(app, request.body, request);
        return reply.send(result);
    });
    app.get('/billing/invoices', async (request, reply) => {
        const result = await controller.gatewayListInvoices(app, request);
        return reply.send(result);
    });
    app.post('/billing/invoices', async (request, reply) => {
        const result = await controller.gatewayCreateInvoice(app, request.body, request);
        return reply.send(result);
    });
    app.get('/notifications', async (request, reply) => {
        const result = await controller.gatewayListNotifications(app, request);
        return reply.send(result);
    });
    app.post('/notifications', async (request, reply) => {
        const result = await controller.gatewayCreateNotification(app, request.body, request);
        return reply.send(result);
    });
};
exports.default = ApiGatewayRoutes;
