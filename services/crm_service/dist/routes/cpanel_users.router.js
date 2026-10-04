"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CpanelUsersService_1 = require("../services/cpanel_users/CpanelUsersService");
const CpanelUsersRoutes = async (app) => {
    const controller = new CpanelUsersService_1.CpanelUsersService();
    app.post('/sales/cpanel/users', async (request, reply) => {
        const result = await controller.createSalesCpanelUser(app, request.body, request);
        return reply.send(result);
    });
};
exports.default = CpanelUsersRoutes;
