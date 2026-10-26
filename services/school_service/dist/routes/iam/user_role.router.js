"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserRoleService_1 = require("../../services/iam/user_role/UserRoleService");
const UserRoleRoutes = async (app) => {
    const controller = new UserRoleService_1.UserRoleService();
    app.get('/user_role', async (request, reply) => {
        const result = await controller.listUserRole(app, request);
        return reply.send(result);
    });
    app.post('/user_role', async (request, reply) => {
        const result = await controller.createUserRole(app, request.body, request);
        return reply.send(result);
    });
    app.get('/user_role/:id', async (request, reply) => {
        const result = await controller.getUserRoleById(app, request);
        return reply.send(result);
    });
    app.put('/user_role/:id', async (request, reply) => {
        const result = await controller.updateUserRole(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/user_role/:id', async (request, reply) => {
        const result = await controller.deleteUserRole(app, request);
        return reply.send(result);
    });
};
exports.default = UserRoleRoutes;
