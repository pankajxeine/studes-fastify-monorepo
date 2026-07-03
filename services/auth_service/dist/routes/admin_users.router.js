"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AdminUsersService_1 = require("../services/cpanels/admin_users/AdminUsersService");
const AdminUsersRoutes = async (app) => {
    const controller = new AdminUsersService_1.AdminUsersService();
    app.get('/admin_users', async (request, reply) => {
        return await reply.send(controller.listAdminUsers(app, request));
    });
    app.post('/admin_users', async (request, reply) => {
        return await reply.send(controller.createAdminUser(app, request.body, request));
    });
    app.get('/admin_users/:id', async (request, reply) => {
        return await reply.send(controller.getAdminUsersById(app, request));
    });
    app.put('/admin_users/:id', async (request, reply) => {
        return await reply.send(controller.updateAdminUser(app, request.body, request));
    });
    app.delete('/admin_users/:id', async (request, reply) => {
        return await reply.send(controller.deleteAdminUser(app, request));
    });
};
exports.default = AdminUsersRoutes;
