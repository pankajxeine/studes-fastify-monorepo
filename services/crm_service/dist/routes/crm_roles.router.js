"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CrmRolesService_1 = require("../services/crm_roles/CrmRolesService");
const CrmRolesRoutes = async (app) => {
    const controller = new CrmRolesService_1.CrmRolesService();
    app.get('/crm/roles', async (request, reply) => {
        const result = await controller.listCrmRoles(app, request);
        return reply.send(result);
    });
    app.post('/crm/roles', async (request, reply) => {
        const result = await controller.createCrmRole(app, request.body, request);
        return reply.send(result);
    });
    app.get('/crm/roles/:roleId', async (request, reply) => {
        const result = await controller.getCrmRole(app, request);
        return reply.send(result);
    });
    app.patch('/crm/roles/:roleId', async (request, reply) => {
        const result = await controller.updateCrmRole(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/crm/roles/:roleId', async (request, reply) => {
        const result = await controller.deleteCrmRole(app, request);
        return reply.send(result);
    });
};
exports.default = CrmRolesRoutes;
