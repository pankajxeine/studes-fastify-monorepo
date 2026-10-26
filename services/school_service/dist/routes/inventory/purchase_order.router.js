"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PurchaseOrderService_1 = require("../../services/inventory/purchase_order/PurchaseOrderService");
const PurchaseOrderRoutes = async (app) => {
    const controller = new PurchaseOrderService_1.PurchaseOrderService();
    app.get('/purchase_order', async (request, reply) => {
        const result = await controller.listPurchaseOrder(app, request);
        return reply.send(result);
    });
    app.post('/purchase_order', async (request, reply) => {
        const result = await controller.createPurchaseOrder(app, request.body, request);
        return reply.send(result);
    });
    app.get('/purchase_order/:id', async (request, reply) => {
        const result = await controller.getPurchaseOrderById(app, request);
        return reply.send(result);
    });
    app.put('/purchase_order/:id', async (request, reply) => {
        const result = await controller.updatePurchaseOrder(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/purchase_order/:id', async (request, reply) => {
        const result = await controller.deletePurchaseOrder(app, request);
        return reply.send(result);
    });
};
exports.default = PurchaseOrderRoutes;
