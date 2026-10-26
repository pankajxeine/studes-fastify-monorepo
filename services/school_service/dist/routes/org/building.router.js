"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BuildingService_1 = require("../../services/org/building/BuildingService");
const BuildingRoutes = async (app) => {
    const controller = new BuildingService_1.BuildingService();
    app.get('/building', async (request, reply) => {
        const result = await controller.listBuilding(app, request);
        return reply.send(result);
    });
    app.post('/building', async (request, reply) => {
        const result = await controller.createBuilding(app, request.body, request);
        return reply.send(result);
    });
    app.get('/building/:id', async (request, reply) => {
        const result = await controller.getBuildingById(app, request);
        return reply.send(result);
    });
    app.put('/building/:id', async (request, reply) => {
        const result = await controller.updateBuilding(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/building/:id', async (request, reply) => {
        const result = await controller.deleteBuilding(app, request);
        return reply.send(result);
    });
};
exports.default = BuildingRoutes;
