"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FeeStructureService_1 = require("../../services/finance/fee_structure/FeeStructureService");
const FeeStructureRoutes = async (app) => {
    const controller = new FeeStructureService_1.FeeStructureService();
    app.get('/fee_structure', async (request, reply) => {
        const result = await controller.listFeeStructure(app, request);
        return reply.send(result);
    });
    app.post('/fee_structure', async (request, reply) => {
        const result = await controller.createFeeStructure(app, request.body, request);
        return reply.send(result);
    });
    app.get('/fee_structure/:id', async (request, reply) => {
        const result = await controller.getFeeStructureById(app, request);
        return reply.send(result);
    });
    app.put('/fee_structure/:id', async (request, reply) => {
        const result = await controller.updateFeeStructure(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/fee_structure/:id', async (request, reply) => {
        const result = await controller.deleteFeeStructure(app, request);
        return reply.send(result);
    });
};
exports.default = FeeStructureRoutes;
