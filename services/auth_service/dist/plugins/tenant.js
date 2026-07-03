"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const zod_1 = require("zod");
const core_1 = require("../core");
const db_1 = require("./db");
const sequelize_1 = require("sequelize");
const cpanel_1 = require("../entities/cpanel");
const cpanel_router_1 = require("../entities/cpanel_router");
const escapeIdentifier_1 = require("../utils/escapeIdentifier");
const tenantConfigSchema = zod_1.z.object({
    requireTenant: zod_1.z.boolean().optional().default(true),
});
exports.default = (0, fastify_plugin_1.default)(async (app) => {
    app.decorateRequest('tenant', null);
    app.decorateRequest('tenantModels', null);
    app.decorate('db', null);
    app.decorate('cpanelModels', null);
    app.decorate('cpanelRouterModels', null);
    await Object.defineProperty(app, 'db', {
        get() { return db_1.sequelize; }
    });
    await Object.defineProperty(app, 'cpanelModel', {
        get() { return (0, cpanel_1.initGeneratedEntities)(db_1.sequelize).models; }
    });
    await Object.defineProperty(app, 'cpanelRouterModel', {
        get() { return (0, cpanel_router_1.initGeneratedEntities)(db_1.sequelize).models; }
    });
    app.addHook('onRequest', async (request, reply) => {
        const tenantId = request.headers['x-tenant-id'];
        const db_schema = tenantId ? (0, escapeIdentifier_1.escapeIdentifier)(`${tenantId}`) : "skeleton_cpanel_router";
        request.dbSchema = db_schema;
        // Skip tenant resolution for public routes
        if (['/health', '/auth', '/docs', '/cpanelroutes'].includes(request.routeOptions.url)) {
            return;
        }
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
            throw new core_1.BadRequestError('Tenant not specified');
        }
        request.log.info({ tenantIdOrSlug, resolvedBy: from, hostname }, 'tenant resolution started');
        // Lookup tenant in central "tenants" table (shared schema)
        const Tenant = db_1.sequelize.define('Tenant', {
            id: { type: sequelize_1.DataTypes.STRING, primaryKey: true },
            slug: { type: sequelize_1.DataTypes.STRING },
            schema_name: { type: sequelize_1.DataTypes.STRING },
        }, { tableName: 'tenants', schema: 'public', timestamps: false });
        const tenant = await Tenant.findOne({
            where: { [db_1.sequelize.Op.or]: [{ id: tenantIdOrSlug }, { slug: tenantIdOrSlug }] },
        });
        if (!tenant) {
            request.log.warn({ tenantIdOrSlug }, 'tenant resolution failed: tenant not found');
            reply.code(404);
            throw new Error('Tenant not found');
        }
        const schema = (0, escapeIdentifier_1.escapeIdentifier)(tenant.getDataValue('schema_name'));
        request.tenant = {
            id: tenant.getDataValue('id'),
            slug: tenant.getDataValue('slug'),
            schema: tenant.getDataValue('schema_name'),
            resolvedBy: from ?? 'header',
        };
        request.log.info({ tenantId: tenant.getDataValue('id'), tenantSlug: tenant.getDataValue('slug'), schema, resolvedBy: from }, 'tenant resolved');
    });
    app.addHook('onClose', async () => {
        await db_1.sequelize.close();
    });
});
