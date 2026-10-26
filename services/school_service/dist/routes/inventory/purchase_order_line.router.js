"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PurchaseOrderLineService_1 = require("../../services/inventory/purchase_order_line/PurchaseOrderLineService");
const PurchaseOrderLineRoutes = async (app) => {
    const controller = new PurchaseOrderLineService_1.PurchaseOrderLineService();
    app.get('/purchase_order_line', async (request, reply) => {
        const result = await controller.listPurchaseOrderLine(app, request);
        return reply.send(result);
    });
    app.post('/purchase_order_line', async (request, reply) => {
        const result = await controller.createPurchaseOrderLine(app, request.body, request);
        return reply.send(result);
    });
    app.get('/purchase_order_line/:id', async (request, reply) => {
        const result = await controller.getPurchaseOrderLineById(app, request);
        return reply.send(result);
    });
    app.put('/purchase_order_line/:id', async (request, reply) => {
        const result = await controller.updatePurchaseOrderLine(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/purchase_order_line/:id', async (request, reply) => {
        const result = await controller.deletePurchaseOrderLine(app, request);
        return reply.send(result);
    });
};
exports.default = PurchaseOrderLineRoutes;
