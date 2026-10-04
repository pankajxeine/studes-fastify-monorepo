"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TenantOnboardService_1 = require("../services/tenant_onboard/TenantOnboardService");
const TenantOnboardRoutes = async (app) => {
    const controller = new TenantOnboardService_1.TenantOnboardService();
    app.post('/tenants/onboard', async (request, reply) => {
        const result = await controller.onboardTenant(app, request.body, request);
        return reply.send(result);
    });
};
exports.default = TenantOnboardRoutes;
