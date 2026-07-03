"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PackageRolesService_1 = require("../services/cpanels/package_roles/PackageRolesService");
const PackageRolesRoutes = async (app) => {
    const controller = new PackageRolesService_1.PackageRolesService();
    app.get('/package_roles', async (request, reply) => {
        return await reply.send(controller.listPackageRoles(app, request));
    });
    app.post('/package_roles', async (request, reply) => {
        return await reply.send(controller.createPackageRole(app, request.body, request));
    });
    app.get('/package_roles/:id', async (request, reply) => {
        return await reply.send(controller.getPackageRolesById(app, request));
    });
    app.put('/package_roles/:id', async (request, reply) => {
        return await reply.send(controller.updatePackageRole(app, request.body, request));
    });
    app.delete('/package_roles/:id', async (request, reply) => {
        return await reply.send(controller.deletePackageRole(app, request));
    });
};
exports.default = PackageRolesRoutes;
