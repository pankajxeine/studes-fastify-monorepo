"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RouteStopService_1 = require("../../services/transport/route_stop/RouteStopService");
const RouteStopRoutes = async (app) => {
    const controller = new RouteStopService_1.RouteStopService();
    app.get('/route_stop', async (request, reply) => {
        const result = await controller.listRouteStop(app, request);
        return reply.send(result);
    });
    app.post('/route_stop', async (request, reply) => {
        const result = await controller.createRouteStop(app, request.body, request);
        return reply.send(result);
    });
    app.get('/route_stop/:id', async (request, reply) => {
        const result = await controller.getRouteStopById(app, request);
        return reply.send(result);
    });
    app.put('/route_stop/:id', async (request, reply) => {
        const result = await controller.updateRouteStop(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/route_stop/:id', async (request, reply) => {
        const result = await controller.deleteRouteStop(app, request);
        return reply.send(result);
    });
};
exports.default = RouteStopRoutes;
