"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FeeHeadService_1 = require("../../services/finance/fee_head/FeeHeadService");
const FeeHeadRoutes = async (app) => {
    const controller = new FeeHeadService_1.FeeHeadService();
    app.get('/fee_head', async (request, reply) => {
        const result = await controller.listFeeHead(app, request);
        return reply.send(result);
    });
    app.post('/fee_head', async (request, reply) => {
        const result = await controller.createFeeHead(app, request.body, request);
        return reply.send(result);
    });
    app.get('/fee_head/:id', async (request, reply) => {
        const result = await controller.getFeeHeadById(app, request);
        return reply.send(result);
    });
    app.put('/fee_head/:id', async (request, reply) => {
        const result = await controller.updateFeeHead(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/fee_head/:id', async (request, reply) => {
        const result = await controller.deleteFeeHead(app, request);
        return reply.send(result);
    });
};
exports.default = FeeHeadRoutes;
