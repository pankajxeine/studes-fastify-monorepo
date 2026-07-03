"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SubPackageFeaturesService_1 = require("../services/cpanels/sub_package_features/SubPackageFeaturesService");
const SubPackageFeaturesRoutes = async (app) => {
    const controller = new SubPackageFeaturesService_1.SubPackageFeaturesService();
    app.get('/sub_package_features', async (request, reply) => {
        return await reply.send(controller.listSubPackageFeatures(app, request));
    });
    app.post('/sub_package_features', async (request, reply) => {
        return await reply.send(controller.createSubPackageFeature(app, request.body, request));
    });
    app.get('/sub_package_features/:id', async (request, reply) => {
        return await reply.send(controller.getSubPackageFeaturesById(app, request));
    });
    app.put('/sub_package_features/:id', async (request, reply) => {
        return await reply.send(controller.updateSubPackageFeature(app, request.body, request));
    });
    app.delete('/sub_package_features/:id', async (request, reply) => {
        return await reply.send(controller.deleteSubPackageFeature(app, request));
    });
};
exports.default = SubPackageFeaturesRoutes;
