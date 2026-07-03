"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PackageFeatureBlocksService_1 = require("../services/cpanels/package_feature_blocks/PackageFeatureBlocksService");
const PackageFeatureBlocksRoutes = async (app) => {
    const controller = new PackageFeatureBlocksService_1.PackageFeatureBlocksService();
    app.get('/package_feature_blocks', async (request, reply) => {
        return await reply.send(controller.listPackageFeatureBlocks(app, request));
    });
    app.post('/package_feature_blocks', async (request, reply) => {
        return await reply.send(controller.createPackageFeatureBlock(app, request.body, request));
    });
    app.get('/package_feature_blocks/:id', async (request, reply) => {
        return await reply.send(controller.getPackageFeatureBlocksById(app, request));
    });
    app.put('/package_feature_blocks/:id', async (request, reply) => {
        return await reply.send(controller.updatePackageFeatureBlock(app, request.body, request));
    });
    app.delete('/package_feature_blocks/:id', async (request, reply) => {
        return await reply.send(controller.deletePackageFeatureBlock(app, request));
    });
};
exports.default = PackageFeatureBlocksRoutes;
