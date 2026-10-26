"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PlacementRoundResultService_1 = require("../../services/partner/placement_round_result/PlacementRoundResultService");
const PlacementRoundResultRoutes = async (app) => {
    const controller = new PlacementRoundResultService_1.PlacementRoundResultService();
    app.get('/placement_round_result', async (request, reply) => {
        const result = await controller.listPlacementRoundResult(app, request);
        return reply.send(result);
    });
    app.post('/placement_round_result', async (request, reply) => {
        const result = await controller.createPlacementRoundResult(app, request.body, request);
        return reply.send(result);
    });
    app.get('/placement_round_result/:id', async (request, reply) => {
        const result = await controller.getPlacementRoundResultById(app, request);
        return reply.send(result);
    });
    app.put('/placement_round_result/:id', async (request, reply) => {
        const result = await controller.updatePlacementRoundResult(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/placement_round_result/:id', async (request, reply) => {
        const result = await controller.deletePlacementRoundResult(app, request);
        return reply.send(result);
    });
};
exports.default = PlacementRoundResultRoutes;
