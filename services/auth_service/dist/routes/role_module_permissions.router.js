"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RoleModulePermissionsService_1 = require("../services/cpanels/role_module_permissions/RoleModulePermissionsService");
const RoleModulePermissionsRoutes = async (app) => {
    const controller = new RoleModulePermissionsService_1.RoleModulePermissionsService();
    app.get('/role_module_permissions', async (request, reply) => {
        return await reply.send(controller.listRoleModulePermissions(app, request));
    });
    app.post('/role_module_permissions', async (request, reply) => {
        return await reply.send(controller.createRoleModulePermission(app, request.body, request));
    });
    app.get('/role_module_permissions/:id', async (request, reply) => {
        return await reply.send(controller.getRoleModulePermissionsById(app, request));
    });
    app.put('/role_module_permissions/:id', async (request, reply) => {
        return await reply.send(controller.updateRoleModulePermission(app, request.body, request));
    });
    app.delete('/role_module_permissions/:id', async (request, reply) => {
        return await reply.send(controller.deleteRoleModulePermission(app, request));
    });
};
exports.default = RoleModulePermissionsRoutes;
