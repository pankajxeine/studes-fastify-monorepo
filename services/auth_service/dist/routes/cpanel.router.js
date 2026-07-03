"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CpanelService_1 = require("../services/cpanel/CpanelService");
const CpanelRoutes = async (app) => {
    const controller = new CpanelService_1.CpanelService();
    app.get('/cpanel-users', async (request, reply) => {
        return await reply.send(controller.getCpanelUsers(app, request));
    });
};
exports.default = CpanelRoutes;
