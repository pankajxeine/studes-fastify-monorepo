"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CanteenOrderLineService_1 = require("../../services/canteen/canteen_order_line/CanteenOrderLineService");
const CanteenOrderLineRoutes = async (app) => {
    const controller = new CanteenOrderLineService_1.CanteenOrderLineService();
    app.get('/canteen_order_line', async (request, reply) => {
        const result = await controller.listCanteenOrderLine(app, request);
        return reply.send(result);
    });
    app.post('/canteen_order_line', async (request, reply) => {
        const result = await controller.createCanteenOrderLine(app, request.body, request);
        return reply.send(result);
    });
    app.get('/canteen_order_line/:id', async (request, reply) => {
        const result = await controller.getCanteenOrderLineById(app, request);
        return reply.send(result);
    });
    app.put('/canteen_order_line/:id', async (request, reply) => {
        const result = await controller.updateCanteenOrderLine(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/canteen_order_line/:id', async (request, reply) => {
        const result = await controller.deleteCanteenOrderLine(app, request);
        return reply.send(result);
    });
};
exports.default = CanteenOrderLineRoutes;
