"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RoleTemplateModulesService_1 = require("../services/cpanels/role_template_modules/RoleTemplateModulesService");
const RoleTemplateModulesRoutes = async (app) => {
    const controller = new RoleTemplateModulesService_1.RoleTemplateModulesService();
    app.get('/role_template_modules', async (request, reply) => {
        return await reply.send(controller.listRoleTemplateModules(app, request));
    });
    app.post('/role_template_modules', async (request, reply) => {
        return await reply.send(controller.createRoleTemplateModule(app, request.body, request));
    });
    app.get('/role_template_modules/:id', async (request, reply) => {
        return await reply.send(controller.getRoleTemplateModulesById(app, request));
    });
    app.put('/role_template_modules/:id', async (request, reply) => {
        return await reply.send(controller.updateRoleTemplateModule(app, request.body, request));
    });
    app.delete('/role_template_modules/:id', async (request, reply) => {
        return await reply.send(controller.deleteRoleTemplateModule(app, request));
    });
};
exports.default = RoleTemplateModulesRoutes;
