"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CanteenOutletService_1 = require("../../services/canteen/canteen_outlet/CanteenOutletService");
const CanteenOutletRoutes = async (app) => {
    const controller = new CanteenOutletService_1.CanteenOutletService();
    app.get('/canteen_outlet', async (request, reply) => {
        const result = await controller.listCanteenOutlet(app, request);
        return reply.send(result);
    });
    app.post('/canteen_outlet', async (request, reply) => {
        const result = await controller.createCanteenOutlet(app, request.body, request);
        return reply.send(result);
    });
    app.get('/canteen_outlet/:id', async (request, reply) => {
        const result = await controller.getCanteenOutletById(app, request);
        return reply.send(result);
    });
    app.put('/canteen_outlet/:id', async (request, reply) => {
        const result = await controller.updateCanteenOutlet(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/canteen_outlet/:id', async (request, reply) => {
        const result = await controller.deleteCanteenOutlet(app, request);
        return reply.send(result);
    });
};
exports.default = CanteenOutletRoutes;
