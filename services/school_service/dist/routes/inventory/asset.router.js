"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AssetService_1 = require("../../services/inventory/asset/AssetService");
const AssetRoutes = async (app) => {
    const controller = new AssetService_1.AssetService();
    app.get('/asset', async (request, reply) => {
        const result = await controller.listAsset(app, request);
        return reply.send(result);
    });
    app.post('/asset', async (request, reply) => {
        const result = await controller.createAsset(app, request.body, request);
        return reply.send(result);
    });
    app.get('/asset/:id', async (request, reply) => {
        const result = await controller.getAssetById(app, request);
        return reply.send(result);
    });
    app.put('/asset/:id', async (request, reply) => {
        const result = await controller.updateAsset(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/asset/:id', async (request, reply) => {
        const result = await controller.deleteAsset(app, request);
        return reply.send(result);
    });
};
exports.default = AssetRoutes;
