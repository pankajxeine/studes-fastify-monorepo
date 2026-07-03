"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PackageRoleFeaturePermissionsService_1 = require("../services/cpanels/package_role_feature_permissions/PackageRoleFeaturePermissionsService");
const PackageRoleFeaturePermissionsRoutes = async (app) => {
    const controller = new PackageRoleFeaturePermissionsService_1.PackageRoleFeaturePermissionsService();
    app.get('/package_role_feature_permissions', async (request, reply) => {
        return await reply.send(controller.listPackageRoleFeaturePermissions(app, request));
    });
    app.post('/package_role_feature_permissions', async (request, reply) => {
        return await reply.send(controller.createPackageRoleFeaturePermission(app, request.body, request));
    });
    app.get('/package_role_feature_permissions/:id', async (request, reply) => {
        return await reply.send(controller.getPackageRoleFeaturePermissionsById(app, request));
    });
    app.put('/package_role_feature_permissions/:id', async (request, reply) => {
        return await reply.send(controller.updatePackageRoleFeaturePermission(app, request.body, request));
    });
    app.delete('/package_role_feature_permissions/:id', async (request, reply) => {
        return await reply.send(controller.deletePackageRoleFeaturePermission(app, request));
    });
};
exports.default = PackageRoleFeaturePermissionsRoutes;
