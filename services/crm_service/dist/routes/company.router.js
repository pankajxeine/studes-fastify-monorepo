"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CompanyService_1 = require("../services/company/CompanyService");
const CompanyRoutes = async (app) => {
    const controller = new CompanyService_1.CompanyService();
    app.get('/company', async (request, reply) => {
        const result = await controller.getCompanyProfile(app, request);
        return reply.send(result);
    });
    app.put('/company', async (request, reply) => {
        const result = await controller.updateCompanyProfile(app, request.body, request);
        return reply.send(result);
    });
};
exports.default = CompanyRoutes;
