"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CpanelRouteService_1 = require("../services/cpanel_route/CpanelRouteService");
const CpanelRouteRoutes = async (app) => {
    const controller = new CpanelRouteService_1.CpanelRouteService();
    app.get('/cpanelroutes/:domain?', async (request, reply) => {
        return await reply.send(controller.cpanelRouteDomain(app, request));
    });
};
exports.default = CpanelRouteRoutes;
