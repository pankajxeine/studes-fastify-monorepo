"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PackageFeaturesService_1 = require("../services/cpanels/package_features/PackageFeaturesService");
const PackageFeaturesRoutes = async (app) => {
    const controller = new PackageFeaturesService_1.PackageFeaturesService();
    app.get('/package_features', async (request, reply) => {
        return await reply.send(controller.listPackageFeatures(app, request));
    });
    app.post('/package_features', async (request, reply) => {
        return await reply.send(controller.createPackageFeature(app, request.body, request));
    });
    app.get('/package_features/:id', async (request, reply) => {
        return await reply.send(controller.getPackageFeaturesById(app, request));
    });
    app.put('/package_features/:id', async (request, reply) => {
        return await reply.send(controller.updatePackageFeature(app, request.body, request));
    });
    app.delete('/package_features/:id', async (request, reply) => {
        return await reply.send(controller.deletePackageFeature(app, request));
    });
};
exports.default = PackageFeaturesRoutes;
