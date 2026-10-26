"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CanteenOrderStatusHistoryService_1 = require("../../services/canteen/canteen_order_status_history/CanteenOrderStatusHistoryService");
const CanteenOrderStatusHistoryRoutes = async (app) => {
    const controller = new CanteenOrderStatusHistoryService_1.CanteenOrderStatusHistoryService();
    app.get('/canteen_order_status_history', async (request, reply) => {
        const result = await controller.listCanteenOrderStatusHistory(app, request);
        return reply.send(result);
    });
    app.post('/canteen_order_status_history', async (request, reply) => {
        const result = await controller.createCanteenOrderStatusHistory(app, request.body, request);
        return reply.send(result);
    });
    app.get('/canteen_order_status_history/:id', async (request, reply) => {
        const result = await controller.getCanteenOrderStatusHistoryById(app, request);
        return reply.send(result);
    });
    app.put('/canteen_order_status_history/:id', async (request, reply) => {
        const result = await controller.updateCanteenOrderStatusHistory(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/canteen_order_status_history/:id', async (request, reply) => {
        const result = await controller.deleteCanteenOrderStatusHistory(app, request);
        return reply.send(result);
    });
};
exports.default = CanteenOrderStatusHistoryRoutes;
