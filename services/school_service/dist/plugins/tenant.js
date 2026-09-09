"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const zod_1 = require("zod");
const tenantConfigSchema = zod_1.z.object({
    requireTenant: zod_1.z.boolean().optional().default(true)
});
exports.default = (0, fastify_plugin_1.default)(async (app) => {
    app.decorateRequest('tenant', null);
    app.decorateRequest('db', null);
    app.addHook('onRequest', async (request, reply) => {
        const config = tenantConfigSchema.parse(request.routeOptions.config ?? {});
        if (!config.requireTenant) {
            return;
        }
        const headerName = (app.env?.TENANT_HEADER_NAME ?? process.env.TENANT_HEADER_NAME ?? 'x-tenant-id').toLowerCase();
        const headerSlugName = (app.env?.TENANT_HEADER_SLUG_NAME ?? process.env.TENANT_HEADER_SLUG_NAME ?? 'x-tenant-slug').toLowerCase();
        const precedence = (app.env?.TENANT_HEADER_PRECEDENCE ?? process.env.TENANT_HEADER_PRECEDENCE ?? 'header_then_subdomain');
        const headerTenantId = request.headers[headerName];
        const headerTenantSlug = request.headers[headerSlugName];
        const hostname = (request.hostname || '').toLowerCase();
        const baseDomain = (app.env?.TENANT_BASE_DOMAIN ?? process.env.TENANT_BASE_DOMAIN ?? 'localtest.me').toLowerCase();
        let tenantIdOrSlug;
        let from;
        const subdomain = hostname.endsWith(`.${baseDomain}`)
            ? hostname.slice(0, -1 * (baseDomain.length + 1))
            : undefined;
        if (precedence === 'header_then_subdomain') {
            tenantIdOrSlug = headerTenantId || headerTenantSlug || subdomain;
            from = headerTenantId || headerTenantSlug ? 'header' : subdomain ? 'subdomain' : undefined;
        }
        else {
            tenantIdOrSlug = subdomain || headerTenantId || headerTenantSlug;
            from = subdomain ? 'subdomain' : headerTenantId || headerTenantSlug ? 'header' : undefined;
        }
        if (!tenantIdOrSlug) {
            reply.code(400);
            throw new Error('Tenant not specified');
        }
        const client = await app.pg.connect();
        try {
            const tenantResult = await client.query(`select id, slug, schema_name from public.tenants where id::text = $1 or slug = $1 limit 1`, [tenantIdOrSlug]);
            if (tenantResult.rowCount === 0) {
                reply.code(404);
                throw new Error('Tenant not found');
            }
            const tenant = tenantResult.rows[0];
            // One database, isolated schemas. schema_name comes from the trusted
            // control-plane registry, never directly from the request.
            await client.query(`select set_config('search_path', format('%I, public', $1), false)`, [tenant.schema_name]);
            request.tenant = {
                id: tenant.id,
                slug: tenant.slug,
                schema: tenant.schema_name,
                resolvedBy: from ?? 'header'
            };
            request.db = client;
        }
        catch (err) {
            client.release();
            throw err;
        }
    });
    app.addHook('onResponse', async (request) => {
        if (request.db) {
            request.db.release();
        }
    });
});
