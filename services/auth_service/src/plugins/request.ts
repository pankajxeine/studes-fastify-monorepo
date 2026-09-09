import fp from 'fastify-plugin';
import { z } from 'zod';
import { BadRequestError } from '../core';
import { sequelize } from './db';
import { DataTypes, Op } from 'sequelize';
import { registerGeneratedEntityDecorators } from '../entities';

const tenantConfigSchema = z.object({
  requireTenant: z.boolean().optional().default(true),
});

export default fp(async (app) => {
  app.decorateRequest('tenant', null);
  app.decorateRequest('tenantModels', null);
  app.decorateRequest('cpanelDbSchema', 'default_cpanel');
  app.decorateRequest('dbSchema', null);
  app.decorateRequest('routerDbSchema', 'default_cpanel_route');
  app.decorate('db', null);

  await Object.defineProperty(app, 'db', {
    get() { return sequelize; }
  });

  registerGeneratedEntityDecorators(app, sequelize);

  app.addHook('onRequest', async (request, reply) => {
    const config = tenantConfigSchema.parse(request.routeOptions.config ?? {});
    request.cpanelDbSchema = app.env.DEFAULT_CPANEL_SCHEMA;
    request.routerDbSchema = app.env.DEFAULT_CPANEL_ROUTE_SCHEMA;
    // Public login resolves the tenant from credentials, not a spoofable header.
    if (!config.requireTenant) {
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
      where: { [Op.or]: [{ id: tenantIdOrSlug }, { slug: tenantIdOrSlug }] },
    });

    if (!tenant) {
      request.log.warn({ tenantIdOrSlug }, 'tenant resolution failed: tenant not found');
      reply.code(404);
      throw new Error('Tenant not found');
    }

    request.tenant = {
      id: tenant.getDataValue('id'),
      slug: tenant.getDataValue('slug'),
      resolvedBy: from ?? 'header',
    };
    request.dbSchema = tenant.getDataValue('schema_name');

    request.log.info(
      { tenantId: tenant.getDataValue('id'), tenantSlug: tenant.getDataValue('slug'), resolvedBy: from },
      'tenant resolved'
    );
  });

  app.addHook('onClose', async () => {
    await sequelize.close();
  });
});

declare module 'fastify' {
  interface FastifyInstance {
    tenantModel: any;
    db: typeof sequelize | null;
  }
  interface FastifyRequest {
    cpanelDbSchema: string;
    routerDbSchema: string;
    dbSchema: string | null;
    tenant: null | {
      id: string;
      slug: string;
      resolvedBy: 'header' | 'subdomain';
    };
  }

  interface FastifyRouteConfig {
    requireTenant?: boolean;
  }
}
