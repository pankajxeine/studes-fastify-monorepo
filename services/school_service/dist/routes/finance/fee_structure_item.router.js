"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FeeStructureItemService_1 = require("../../services/finance/fee_structure_item/FeeStructureItemService");
const FeeStructureItemRoutes = async (app) => {
    const controller = new FeeStructureItemService_1.FeeStructureItemService();
    app.get('/fee_structure_item', async (request, reply) => {
        const result = await controller.listFeeStructureItem(app, request);
        return reply.send(result);
    });
    app.post('/fee_structure_item', async (request, reply) => {
        const result = await controller.createFeeStructureItem(app, request.body, request);
        return reply.send(result);
    });
    app.get('/fee_structure_item/:id', async (request, reply) => {
        const result = await controller.getFeeStructureItemById(app, request);
        return reply.send(result);
    });
    app.put('/fee_structure_item/:id', async (request, reply) => {
        const result = await controller.updateFeeStructureItem(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/fee_structure_item/:id', async (request, reply) => {
        const result = await controller.deleteFeeStructureItem(app, request);
        return reply.send(result);
    });
};
exports.default = FeeStructureItemRoutes;
