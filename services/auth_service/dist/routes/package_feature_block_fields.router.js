"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PackageFeatureBlockFieldsService_1 = require("../services/cpanels/package_feature_block_fields/PackageFeatureBlockFieldsService");
const PackageFeatureBlockFieldsRoutes = async (app) => {
    const controller = new PackageFeatureBlockFieldsService_1.PackageFeatureBlockFieldsService();
    app.get('/package_feature_block_fields', async (request, reply) => {
        return await reply.send(controller.listPackageFeatureBlockFields(app, request));
    });
    app.post('/package_feature_block_fields', async (request, reply) => {
        return await reply.send(controller.createPackageFeatureBlockField(app, request.body, request));
    });
    app.get('/package_feature_block_fields/:id', async (request, reply) => {
        return await reply.send(controller.getPackageFeatureBlockFieldsById(app, request));
    });
    app.put('/package_feature_block_fields/:id', async (request, reply) => {
        return await reply.send(controller.updatePackageFeatureBlockField(app, request.body, request));
    });
    app.delete('/package_feature_block_fields/:id', async (request, reply) => {
        return await reply.send(controller.deletePackageFeatureBlockField(app, request));
    });
};
exports.default = PackageFeatureBlockFieldsRoutes;
