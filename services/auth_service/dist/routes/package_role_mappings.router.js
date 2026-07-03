"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PackageRoleMappingsService_1 = require("../services/cpanels/package_role_mappings/PackageRoleMappingsService");
const PackageRoleMappingsRoutes = async (app) => {
    const controller = new PackageRoleMappingsService_1.PackageRoleMappingsService();
    app.get('/package_role_mappings', async (request, reply) => {
        return await reply.send(controller.listPackageRoleMappings(app, request));
    });
    app.post('/package_role_mappings', async (request, reply) => {
        return await reply.send(controller.createPackageRoleMapping(app, request.body, request));
    });
    app.get('/package_role_mappings/:id', async (request, reply) => {
        return await reply.send(controller.getPackageRoleMappingsById(app, request));
    });
    app.put('/package_role_mappings/:id', async (request, reply) => {
        return await reply.send(controller.updatePackageRoleMapping(app, request.body, request));
    });
    app.delete('/package_role_mappings/:id', async (request, reply) => {
        return await reply.send(controller.deletePackageRoleMapping(app, request));
    });
};
exports.default = PackageRoleMappingsRoutes;
