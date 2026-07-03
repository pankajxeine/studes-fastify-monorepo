"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IndustryEnvironmentsService_1 = require("../services/cpanels/industry_environments/IndustryEnvironmentsService");
const IndustryEnvironmentsRoutes = async (app) => {
    const controller = new IndustryEnvironmentsService_1.IndustryEnvironmentsService();
    app.get('/industry_environments', async (request, reply) => {
        return await reply.send(controller.listIndustryEnvironments(app, request));
    });
    app.post('/industry_environments', async (request, reply) => {
        return await reply.send(controller.createIndustryEnvironment(app, request.body, request));
    });
    app.get('/industry_environments/:id', async (request, reply) => {
        return await reply.send(controller.getIndustryEnvironmentsById(app, request));
    });
    app.put('/industry_environments/:id', async (request, reply) => {
        return await reply.send(controller.updateIndustryEnvironment(app, request.body, request));
    });
    app.delete('/industry_environments/:id', async (request, reply) => {
        return await reply.send(controller.deleteIndustryEnvironment(app, request));
    });
};
exports.default = IndustryEnvironmentsRoutes;
