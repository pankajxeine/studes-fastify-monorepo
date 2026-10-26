"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RoleService_1 = require("../../services/iam/role/RoleService");
const RoleRoutes = async (app) => {
    const controller = new RoleService_1.RoleService();
    app.get('/role', async (request, reply) => {
        const result = await controller.listRole(app, request);
        return reply.send(result);
    });
    app.post('/role', async (request, reply) => {
        const result = await controller.createRole(app, request.body, request);
        return reply.send(result);
    });
    app.get('/role/:id', async (request, reply) => {
        const result = await controller.getRoleById(app, request);
        return reply.send(result);
    });
    app.put('/role/:id', async (request, reply) => {
        const result = await controller.updateRole(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/role/:id', async (request, reply) => {
        const result = await controller.deleteRole(app, request);
        return reply.send(result);
    });
};
exports.default = RoleRoutes;
