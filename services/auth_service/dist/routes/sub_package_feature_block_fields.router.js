"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SubPackageFeatureBlockFieldsService_1 = require("../services/cpanels/sub_package_feature_block_fields/SubPackageFeatureBlockFieldsService");
const SubPackageFeatureBlockFieldsRoutes = async (app) => {
    const controller = new SubPackageFeatureBlockFieldsService_1.SubPackageFeatureBlockFieldsService();
    app.get('/sub_package_feature_block_fields', async (request, reply) => {
        return await reply.send(controller.listSubPackageFeatureBlockFields(app, request));
    });
    app.post('/sub_package_feature_block_fields', async (request, reply) => {
        return await reply.send(controller.createSubPackageFeatureBlockField(app, request.body, request));
    });
    app.get('/sub_package_feature_block_fields/:id', async (request, reply) => {
        return await reply.send(controller.getSubPackageFeatureBlockFieldsById(app, request));
    });
    app.put('/sub_package_feature_block_fields/:id', async (request, reply) => {
        return await reply.send(controller.updateSubPackageFeatureBlockField(app, request.body, request));
    });
    app.delete('/sub_package_feature_block_fields/:id', async (request, reply) => {
        return await reply.send(controller.deleteSubPackageFeatureBlockField(app, request));
    });
};
exports.default = SubPackageFeatureBlockFieldsRoutes;
