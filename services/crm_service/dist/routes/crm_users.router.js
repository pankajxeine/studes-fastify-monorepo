"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CrmUsersService_1 = require("../services/crm_users/CrmUsersService");
const CrmUsersRoutes = async (app) => {
    const controller = new CrmUsersService_1.CrmUsersService();
    app.get('/crm/users', async (request, reply) => {
        const result = await controller.listCrmUsers(app, request);
        return reply.send(result);
    });
    app.post('/crm/users', async (request, reply) => {
        const result = await controller.createCrmUser(app, request.body, request);
        return reply.send(result);
    });
    app.get('/crm/users/:userId', async (request, reply) => {
        const result = await controller.getCrmUser(app, request);
        return reply.send(result);
    });
    app.patch('/crm/users/:userId', async (request, reply) => {
        const result = await controller.updateCrmUser(app, request.body, request);
        return reply.send(result);
    });
    app.delete('/crm/users/:userId', async (request, reply) => {
        const result = await controller.deleteCrmUser(app, request);
        return reply.send(result);
    });
};
exports.default = CrmUsersRoutes;
