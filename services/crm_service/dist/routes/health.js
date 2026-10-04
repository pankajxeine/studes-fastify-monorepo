"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const healthRoutes = async (app) => {
    app.get('/health', { config: { requireTenant: false, requireAuth: false } }, async () => ({ ok: true }));
};
exports.default = healthRoutes;
