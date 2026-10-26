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
    app.decorateRequest('dbSchema', null);
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
        const subdomain = hostname.endsWith(`.${baseDomain}`)
            ? hostname.slice(0, -1 * (baseDomain.length + 1))
            : undefined;
        const headerTenant = headerTenantId || headerTenantSlug;
        let tenantIdOrSlug;
        let from;
        let resolvedTenant;
        if (precedence === 'header_then_subdomain' && headerTenant) {
            tenantIdOrSlug = headerTenant;
            from = 'header';
        }
        else {
            const domainResult = await app.pg.query(`select t.id, t.slug, t.schema_name
           from public.tenant_domains d
           join public.tenants t on t.id = d.tenant_id
          where lower(d.domain) = $1
            and d.domain_type = 'tenant'
            and d.application_code = 'school'
            and d.is_active
            and t.status = 'active'
          limit 1`, [hostname]);
            if (domainResult.rowCount) {
                resolvedTenant = domainResult.rows[0];
                from = 'domain';
            }
            else if (precedence === 'header_then_subdomain') {
                tenantIdOrSlug = subdomain;
                from = subdomain ? 'subdomain' : undefined;
            }
            else {
                tenantIdOrSlug = subdomain || headerTenant;
                from = subdomain ? 'subdomain' : headerTenant ? 'header' : undefined;
            }
        }
        if (!tenantIdOrSlug && !resolvedTenant) {
            reply.code(400);
            throw new Error('Tenant not specified');
        }
        const client = await app.pg.connect();
        try {
            const tenantResult = resolvedTenant
                ? { rowCount: 1, rows: [resolvedTenant] }
                : await client.query(`select id, slug, schema_name from public.tenants where (id::text = $1 or slug = $1) and status = 'active' limit 1`, [tenantIdOrSlug]);
            if (tenantResult.rowCount === 0) {
                reply.code(404);
                throw new Error('Tenant not found');
            }
            const tenant = tenantResult.rows[0];
            if (!/^[a-z_][a-z0-9_]{0,62}$/.test(tenant.schema_name)) {
                throw new Error('Tenant organization has an invalid schema configuration');
            }
            // One database, isolated schemas. schema_name comes from the trusted
            // control-plane registry, never directly from the request.
            await client.query(`select set_config('search_path', format('%I, public', $1), false)`, [tenant.schema_name]);
            request.tenant = {
                id: tenant.id,
                slug: tenant.slug,
                schema: tenant.schema_name,
                resolvedBy: from ?? 'header'
            };
            request.dbSchema = tenant.schema_name;
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
