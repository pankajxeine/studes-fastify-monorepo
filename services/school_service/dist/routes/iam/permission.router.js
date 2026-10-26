"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PermissionService_1 = require("../../services/iam/permission/PermissionService");
const PermissionRoutes = async (app) => {
    const controller = new PermissionService_1.PermissionService();
    app.get('/permission', async (request, reply) => {
        const result = await controller.listPermission(app, request);
        return reply.send(result);
    });
    app.post('/permission', async (request, reply) => {
        const result = await controller.createPermission(app, request.body, request);
        return reply.send(result);
    });
    app.get('/permission/:id', async (request, reply) => {
        const result = await controller.getPermissionById(app, request);
        return reply.send(result);
    });
    app.put('/permission/:id', async (request, reply) => {
        const result = await controller.updatePermission(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/permission/:id', async (request, reply) => {
        const result = await controller.deletePermission(app, request);
        return reply.send(result);
    });
};
exports.default = PermissionRoutes;
