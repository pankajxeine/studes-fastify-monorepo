"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const healthRoutes = async (app) => {
    app.get('/health', { config: { requireTenant: false } }, async () => ({ ok: true }));
    app.get('/health/db', { config: { requireTenant: false } }, async () => {
        const [rows] = await app.mysql.execute('select 1 as ok');
        return { ok: rows[0]?.ok === 1 };
    });
};
exports.default = healthRoutes;
