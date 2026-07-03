"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IndustryModulesService_1 = require("../services/cpanels/industry_modules/IndustryModulesService");
const IndustryModulesRoutes = async (app) => {
    const controller = new IndustryModulesService_1.IndustryModulesService();
    app.get('/industry_modules', async (request, reply) => {
        return await reply.send(controller.listIndustryModules(app, request));
    });
    app.post('/industry_modules', async (request, reply) => {
        return await reply.send(controller.createIndustryModule(app, request.body, request));
    });
    app.get('/industry_modules/:id', async (request, reply) => {
        return await reply.send(controller.getIndustryModulesById(app, request));
    });
    app.put('/industry_modules/:id', async (request, reply) => {
        return await reply.send(controller.updateIndustryModule(app, request.body, request));
    });
    app.delete('/industry_modules/:id', async (request, reply) => {
        return await reply.send(controller.deleteIndustryModule(app, request));
    });
};
exports.default = IndustryModulesRoutes;
