"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PtmSlotService_1 = require("../../services/events/ptm_slot/PtmSlotService");
const PtmSlotRoutes = async (app) => {
    const controller = new PtmSlotService_1.PtmSlotService();
    app.get('/ptm_slot', async (request, reply) => {
        const result = await controller.listPtmSlot(app, request);
        return reply.send(result);
    });
    app.post('/ptm_slot', async (request, reply) => {
        const result = await controller.createPtmSlot(app, request.body, request);
        return reply.send(result);
    });
    app.get('/ptm_slot/:id', async (request, reply) => {
        const result = await controller.getPtmSlotById(app, request);
        return reply.send(result);
    });
    app.put('/ptm_slot/:id', async (request, reply) => {
        const result = await controller.updatePtmSlot(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/ptm_slot/:id', async (request, reply) => {
        const result = await controller.deletePtmSlot(app, request);
        return reply.send(result);
    });
};
exports.default = PtmSlotRoutes;
