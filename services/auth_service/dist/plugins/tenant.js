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
            request.log.info({ route: request.routeOptions.url }, 'tenant resolution skipped');
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
            request.log.warn({ headerName, headerSlugName, hostname, baseDomain }, 'tenant resolution failed: tenant not specified');
            reply.code(400);
            throw new Error('Tenant not specified');
        }
        request.log.info({ tenantIdOrSlug, resolvedBy: from, hostname }, 'tenant resolution started');
        const client = await app.mysql.getConnection();
        try {
            await app.useTenantDatabase(client, app.mysqlDatabase);
            request.log.info({ database: app.mysqlDatabase }, 'tenant lookup database selected');
            const [tenantRows] = await client.execute('select id, slug, schema_name from tenants where cast(id as char) = ? or slug = ? limit 1', [tenantIdOrSlug, tenantIdOrSlug]);
            if (tenantRows.length === 0) {
                request.log.warn({ tenantIdOrSlug }, 'tenant resolution failed: tenant not found');
                reply.code(404);
                throw new Error('Tenant not found');
            }
            const tenant = tenantRows[0];
            await app.useTenantDatabase(client, tenant.schema_name);
            request.log.info({ tenantId: tenant.id, tenantSlug: tenant.slug, schema: tenant.schema_name, resolvedBy: from }, 'tenant resolved');
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
