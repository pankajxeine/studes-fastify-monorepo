"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RolesService_1 = require("../services/cpanels/roles/RolesService");
const RolesRoutes = async (app) => {
    const controller = new RolesService_1.RolesService();
    app.get('/roles', async (request, reply) => {
        return await reply.send(controller.listRoles(app, request));
    });
    app.post('/roles', async (request, reply) => {
        return await reply.send(controller.createRole(app, request.body, request));
    });
    app.get('/roles/:id', async (request, reply) => {
        return await reply.send(controller.getRolesById(app, request));
    });
    app.put('/roles/:id', async (request, reply) => {
        return await reply.send(controller.updateRole(app, request.body, request));
    });
    app.delete('/roles/:id', async (request, reply) => {
        return await reply.send(controller.deleteRole(app, request));
    });
};
exports.default = RolesRoutes;
