"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AssetMaintenanceService_1 = require("../../services/inventory/asset_maintenance/AssetMaintenanceService");
const AssetMaintenanceRoutes = async (app) => {
    const controller = new AssetMaintenanceService_1.AssetMaintenanceService();
    app.get('/asset_maintenance', async (request, reply) => {
        const result = await controller.listAssetMaintenance(app, request);
        return reply.send(result);
    });
    app.post('/asset_maintenance', async (request, reply) => {
        const result = await controller.createAssetMaintenance(app, request.body, request);
        return reply.send(result);
    });
    app.get('/asset_maintenance/:id', async (request, reply) => {
        const result = await controller.getAssetMaintenanceById(app, request);
        return reply.send(result);
    });
    app.put('/asset_maintenance/:id', async (request, reply) => {
        const result = await controller.updateAssetMaintenance(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/asset_maintenance/:id', async (request, reply) => {
        const result = await controller.deleteAssetMaintenance(app, request);
        return reply.send(result);
    });
};
exports.default = AssetMaintenanceRoutes;
