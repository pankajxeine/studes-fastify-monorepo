"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RolePermissionService_1 = require("../../services/iam/role_permission/RolePermissionService");
const RolePermissionRoutes = async (app) => {
    const controller = new RolePermissionService_1.RolePermissionService();
    app.get('/role_permission', async (request, reply) => {
        const result = await controller.listRolePermission(app, request);
        return reply.send(result);
    });
    app.post('/role_permission', async (request, reply) => {
        const result = await controller.createRolePermission(app, request.body, request);
        return reply.send(result);
    });
    app.get('/role_permission/:id', async (request, reply) => {
        const result = await controller.getRolePermissionById(app, request);
        return reply.send(result);
    });
    app.put('/role_permission/:id', async (request, reply) => {
        const result = await controller.updateRolePermission(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/role_permission/:id', async (request, reply) => {
        const result = await controller.deleteRolePermission(app, request);
        return reply.send(result);
    });
};
exports.default = RolePermissionRoutes;
