import fp from 'fastify-plugin';
import { z } from 'zod';
import { BadRequestError } from '../core';
import { sequelize } from './db';
import { DataTypes, Sequelize } from 'sequelize';
import { initGeneratedEntities } from '../postgre/entities';
import { escapeIdentifier } from '../utils/escapeIdentifier';
// import { getTenantUserModel } from '../utils/tenantModelCache';

const tenantConfigSchema = z.object({
  requireTenant: z.boolean().optional().default(true),
});

export default fp(async (app) => {
  app.decorateRequest('tenant', null);
  app.decorateRequest('tenantModels', null);
  app.decorateRequest('db', null);

  app.addHook('onRequest', async (request, reply) => {
    const tenantId = request.headers['x-tenant-id'];
    const db_schema = tenantId ? escapeIdentifier(`${tenantId}`) : "default_cpanel";
    /**
     * Note: We attach the Sequelize instance and tenant-specific models to the request object for easy access in route handlers. In a real implementation, you might want to use a more sophisticated approach to manage tenant-specific models, such as a model factory or a caching layer, especially if you have many tenants or complex schemas.
     */
    Object.defineProperty(request, 'db', {
      get() { return sequelize; }
    });

    /**
     * For tenantModels, we call initGeneratedEntities(sequelize) to initialize the models. 
     * In a real implementation, you would likely want to cache these models per tenant schema to avoid re-initializing them on every request, 
     * which can be expensive. 
     * The caching mechanism is not implemented here for simplicity,
     * but you could implement it using a Map or similar data structure keyed by tenant ID or schema name.
     */
    // Cache models per schema to avoid re‑init cost
    Object.defineProperty(request, 'tenantModels', {
      get() {
        if (!app.tenantModelCache) app.tenantModelCache = {};
        if (!db_schema) {
          throw new Error('Tenant schema is not defined');
        }
        if (!app.tenantModelCache[db_schema]!!) {
          // Initialize models for this schema once
          app.tenantModelCache[db_schema] =
            initGeneratedEntities(
              sequelize
            );
        }
        return app.tenantModelCache[db_schema];
      },
    });
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
    const precedence = (app.env?.TENANT_HEADER_PRECEDENCE ?? process.env.TENANT_HEADER_PRECEDENCE ?? 'header_then_subdomain') as
      | 'header_then_subdomain'
      | 'subdomain_then_header';

    const headerTenantId = request.headers[headerName] as string | undefined;
    const headerTenantSlug = request.headers[headerSlugName] as string | undefined;
    const hostname = (request.hostname || '').toLowerCase();
    const baseDomain = (app.env?.TENANT_BASE_DOMAIN ?? process.env.TENANT_BASE_DOMAIN ?? 'localtest.me').toLowerCase();

    let tenantIdOrSlug: string | undefined;
    let from: 'header' | 'subdomain' | undefined;

    const subdomain = hostname.endsWith(`.${baseDomain}`)
      ? hostname.slice(0, -1 * (baseDomain.length + 1))
      : undefined;

    if (precedence === 'header_then_subdomain') {
      tenantIdOrSlug = headerTenantId || headerTenantSlug || subdomain;
      from = headerTenantId || headerTenantSlug ? 'header' : subdomain ? 'subdomain' : undefined;
    } else {
      tenantIdOrSlug = subdomain || headerTenantId || headerTenantSlug;
      from = subdomain ? 'subdomain' : headerTenantId || headerTenantSlug ? 'header' : undefined;
    }

    if (!tenantIdOrSlug) {
      request.log.warn({ headerName, headerSlugName, hostname, baseDomain }, 'tenant resolution failed: tenant not specified');
      reply.code(400);
      throw new BadRequestError('Tenant not specified');
    }

    request.log.info({ tenantIdOrSlug, resolvedBy: from, hostname }, 'tenant resolution started');

    // Lookup tenant in central "tenants" table (shared schema)
    const Tenant = sequelize.define(
      'Tenant',
      {
        id: { type: DataTypes.STRING, primaryKey: true },
        slug: { type: DataTypes.STRING },
        schema_name: { type: DataTypes.STRING },
      },
      { tableName: 'tenants', schema: 'public', timestamps: false }
    );

    const tenant = await Tenant.findOne({
      where: { [sequelize.Op.or]: [{ id: tenantIdOrSlug }, { slug: tenantIdOrSlug }] },
    });

    if (!tenant) {
      request.log.warn({ tenantIdOrSlug }, 'tenant resolution failed: tenant not found');
      reply.code(404);
      throw new Error('Tenant not found');
    }

    const schema = escapeIdentifier(tenant.getDataValue('schema_name'));
    request.tenant = {
      id: tenant.getDataValue('id'),
      slug: tenant.getDataValue('slug'),
      schema: tenant.getDataValue('schema_name'),
      resolvedBy: from ?? 'header',
    };

    // Attach tenant-specific models
    request.db = sequelize;
    request.tenantModels = initGeneratedEntities(sequelize);

    request.log.info(
      { tenantId: tenant.getDataValue('id'), tenantSlug: tenant.getDataValue('slug'), schema, resolvedBy: from },
      'tenant resolved'
    );
  });

  app.addHook('onClose', async () => {
    await sequelize.close();
  });
});

declare module 'fastify' {
  interface FastifyInstance {
    tenantModelCache: Record<string, ReturnType<typeof initGeneratedEntities>>;
  }
  interface FastifyRequest {
    tenant: null | {
      id: string;
      slug: string;
      schema: string;
      resolvedBy: 'header' | 'subdomain';
    };
    db: typeof sequelize | null;
    tenantModels: ReturnType<typeof initGeneratedEntities> | null;
  }

  interface FastifyRouteConfig {
    requireTenant?: boolean;
  }
}
