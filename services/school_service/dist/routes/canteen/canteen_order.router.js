"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CanteenOrderService_1 = require("../../services/canteen/canteen_order/CanteenOrderService");
const CanteenOrderRoutes = async (app) => {
    const controller = new CanteenOrderService_1.CanteenOrderService();
    app.get('/canteen_order', async (request, reply) => {
        const result = await controller.listCanteenOrder(app, request);
        return reply.send(result);
    });
    app.post('/canteen_order', async (request, reply) => {
        const result = await controller.createCanteenOrder(app, request.body, request);
        return reply.send(result);
    });
    app.get('/canteen_order/:id', async (request, reply) => {
        const result = await controller.getCanteenOrderById(app, request);
        return reply.send(result);
    });
    app.put('/canteen_order/:id', async (request, reply) => {
        const result = await controller.updateCanteenOrder(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/canteen_order/:id', async (request, reply) => {
        const result = await controller.deleteCanteenOrder(app, request);
        return reply.send(result);
    });
};
exports.default = CanteenOrderRoutes;
