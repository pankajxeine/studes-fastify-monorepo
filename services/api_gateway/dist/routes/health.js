"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function probe(url) {
    try {
        const res = await fetch(url, { method: 'GET' });
        return { ok: res.ok, status: res.status };
    }
    catch {
        return { ok: false, status: 0 };
    }
}
const healthRoutes = async (app) => {
    app.get('/health', async () => ({ ok: true }));
    app.get('/health/services', async () => {
        const [auth, billing, notification, school, crm] = await Promise.all([
            probe(`${app.env.SERVICE_AUTH_URL}/health`),
            probe(`${app.env.SERVICE_BILLING_URL}/health`),
            probe(`${app.env.SERVICE_NOTIFICATION_URL}/health`),
            probe(`${app.env.SERVICE_SCHOOL_URL}/health`),
            probe(`${app.env.SERVICE_CRM_URL}/health`)
        ]);
        return {
            ok: auth.ok && billing.ok && notification.ok && school.ok && crm.ok,
            services: { auth, billing, notification, school, crm }
        };
    });
    app.get('/health/db', async () => {
        const [auth, billing, notification, school, crm] = await Promise.all([
            probe(`${app.env.SERVICE_AUTH_URL}/health/db`),
            probe(`${app.env.SERVICE_BILLING_URL}/health/db`),
            probe(`${app.env.SERVICE_NOTIFICATION_URL}/health/db`),
            probe(`${app.env.SERVICE_SCHOOL_URL}/health/db`),
            probe(`${app.env.SERVICE_CRM_URL}/health/db`)
        ]);
        return {
            ok: auth.ok && billing.ok && notification.ok && school.ok && crm.ok,
            services: { auth, billing, notification, school, crm }
        };
    });
};
exports.default = healthRoutes;
