"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CpanelCompaniesService_1 = require("../services/cpanels/cpanel_companies/CpanelCompaniesService");
const CpanelCompaniesRoutes = async (app) => {
    const controller = new CpanelCompaniesService_1.CpanelCompaniesService();
    app.get('/cpanel_companies', async (request, reply) => {
        return await reply.send(controller.listCpanelCompanies(app, request));
    });
    app.post('/cpanel_companies', async (request, reply) => {
        return await reply.send(controller.createCpanelCompanie(app, request.body, request));
    });
    app.get('/cpanel_companies/:id', async (request, reply) => {
        return await reply.send(controller.getCpanelCompaniesById(app, request));
    });
    app.put('/cpanel_companies/:id', async (request, reply) => {
        return await reply.send(controller.updateCpanelCompanie(app, request.body, request));
    });
    app.delete('/cpanel_companies/:id', async (request, reply) => {
        return await reply.send(controller.deleteCpanelCompanie(app, request));
    });
};
exports.default = CpanelCompaniesRoutes;
