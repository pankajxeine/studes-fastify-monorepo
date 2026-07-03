"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SubPackageFeatureBlocksService_1 = require("../services/cpanels/sub_package_feature_blocks/SubPackageFeatureBlocksService");
const SubPackageFeatureBlocksRoutes = async (app) => {
    const controller = new SubPackageFeatureBlocksService_1.SubPackageFeatureBlocksService();
    app.get('/sub_package_feature_blocks', async (request, reply) => {
        return await reply.send(controller.listSubPackageFeatureBlocks(app, request));
    });
    app.post('/sub_package_feature_blocks', async (request, reply) => {
        return await reply.send(controller.createSubPackageFeatureBlock(app, request.body, request));
    });
    app.get('/sub_package_feature_blocks/:id', async (request, reply) => {
        return await reply.send(controller.getSubPackageFeatureBlocksById(app, request));
    });
    app.put('/sub_package_feature_blocks/:id', async (request, reply) => {
        return await reply.send(controller.updateSubPackageFeatureBlock(app, request.body, request));
    });
    app.delete('/sub_package_feature_blocks/:id', async (request, reply) => {
        return await reply.send(controller.deleteSubPackageFeatureBlock(app, request));
    });
};
exports.default = SubPackageFeatureBlocksRoutes;
