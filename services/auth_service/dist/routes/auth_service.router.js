"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AuthServiceService_1 = require("../services/AuthServiceService");
function buildHeaders(request) {
    return {
        tenantId: request.headers['x-tenant-id'],
        tenantSlug: request.headers['x-tenant-slug'],
        authorization: request.headers['authorization']
    };
}
const AuthServiceRoutes = async (app) => {
    const controller = new AuthServiceService_1.AuthServiceService();
    app.get('/health', async (request, reply) => {
        return await controller.authHealth(buildHeaders(request));
    });
    app.get('/health/db', async (request, reply) => {
        return await controller.authHealthDb(buildHeaders(request));
    });
    app.post('/auth/register', async (request, reply) => {
        return await controller.authRegister(request.body, buildHeaders(request));
    });
    app.post('/auth/login', async (request, reply) => {
        return await controller.authLogin(request.body, buildHeaders(request));
    });
    app.post('/auth/logout', async (request, reply) => {
        await controller.authLogout(buildHeaders(request));
    });
    app.post('/tenants', async (request, reply) => {
        return await controller.createTenant(request.body, buildHeaders(request));
    });
};
exports.default = AuthServiceRoutes;
