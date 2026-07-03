"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RoleTemplatesService_1 = require("../services/cpanels/role_templates/RoleTemplatesService");
const RoleTemplatesRoutes = async (app) => {
    const controller = new RoleTemplatesService_1.RoleTemplatesService();
    app.get('/role_templates', async (request, reply) => {
        return await reply.send(controller.listRoleTemplates(app, request));
    });
    app.post('/role_templates', async (request, reply) => {
        return await reply.send(controller.createRoleTemplate(app, request.body, request));
    });
    app.get('/role_templates/:id', async (request, reply) => {
        return await reply.send(controller.getRoleTemplatesById(app, request));
    });
    app.put('/role_templates/:id', async (request, reply) => {
        return await reply.send(controller.updateRoleTemplate(app, request.body, request));
    });
    app.delete('/role_templates/:id', async (request, reply) => {
        return await reply.send(controller.deleteRoleTemplate(app, request));
    });
};
exports.default = RoleTemplatesRoutes;
