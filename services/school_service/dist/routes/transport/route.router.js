"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RouteService_1 = require("../../services/transport/route/RouteService");
const RouteRoutes = async (app) => {
    const controller = new RouteService_1.RouteService();
    app.get('/route', async (request, reply) => {
        const result = await controller.listRoute(app, request);
        return reply.send(result);
    });
    app.post('/route', async (request, reply) => {
        const result = await controller.createRoute(app, request.body, request);
        return reply.send(result);
    });
    app.get('/route/:id', async (request, reply) => {
        const result = await controller.getRouteById(app, request);
        return reply.send(result);
    });
    app.put('/route/:id', async (request, reply) => {
        const result = await controller.updateRoute(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/route/:id', async (request, reply) => {
        const result = await controller.deleteRoute(app, request);
        return reply.send(result);
    });
};
exports.default = RouteRoutes;
