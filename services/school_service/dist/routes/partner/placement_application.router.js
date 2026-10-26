"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PlacementApplicationService_1 = require("../../services/partner/placement_application/PlacementApplicationService");
const PlacementApplicationRoutes = async (app) => {
    const controller = new PlacementApplicationService_1.PlacementApplicationService();
    app.get('/placement_application', async (request, reply) => {
        const result = await controller.listPlacementApplication(app, request);
        return reply.send(result);
    });
    app.post('/placement_application', async (request, reply) => {
        const result = await controller.createPlacementApplication(app, request.body, request);
        return reply.send(result);
    });
    app.get('/placement_application/:id', async (request, reply) => {
        const result = await controller.getPlacementApplicationById(app, request);
        return reply.send(result);
    });
    app.put('/placement_application/:id', async (request, reply) => {
        const result = await controller.updatePlacementApplication(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/placement_application/:id', async (request, reply) => {
        const result = await controller.deletePlacementApplication(app, request);
        return reply.send(result);
    });
};
exports.default = PlacementApplicationRoutes;
