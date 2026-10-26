import fp from 'fastify-plugin'
import { z } from 'zod'
import type { ContextConfigDefault, FastifyBaseLogger, FastifySchema, FastifyTypeProvider, FastifyTypeProviderDefault, RawRequestDefaultExpression, RawServerBase, RawServerDefault, RouteGenericInterface } from 'fastify'
import type { FastifyRequestType, ResolveFastifyRequestType } from 'fastify/types/type-provider'

const tenantConfigSchema = z.object({
  requireTenant: z.boolean().optional().default(true)
})

export default fp(async (app) => {
  app.decorateRequest('tenant', null)
  app.decorateRequest('db', null)
  app.decorateRequest('dbSchema', null)

  app.addHook('onRequest', async (request, reply) => {
    const config = tenantConfigSchema.parse(request.routeOptions.config ?? {})
    if (!config.requireTenant) {
      return
    }

    const headerName = (app.env?.TENANT_HEADER_NAME ?? process.env.TENANT_HEADER_NAME ?? 'x-tenant-id').toLowerCase()
    const headerSlugName = (app.env?.TENANT_HEADER_SLUG_NAME ?? process.env.TENANT_HEADER_SLUG_NAME ?? 'x-tenant-slug').toLowerCase()
    const precedence = (app.env?.TENANT_HEADER_PRECEDENCE ?? process.env.TENANT_HEADER_PRECEDENCE ?? 'header_then_subdomain') as
      | 'header_then_subdomain'
      | 'subdomain_then_header'

    const headerTenantId = request.headers[headerName] as string | undefined
    const headerTenantSlug = request.headers[headerSlugName] as string | undefined
    const hostname = (request.hostname || '').toLowerCase()
    const baseDomain = (app.env?.TENANT_BASE_DOMAIN ?? process.env.TENANT_BASE_DOMAIN ?? 'localtest.me').toLowerCase()

    const subdomain = hostname.endsWith(`.${baseDomain}`)
      ? hostname.slice(0, -1 * (baseDomain.length + 1))
      : undefined

    const headerTenant = headerTenantId || headerTenantSlug
    let tenantIdOrSlug: string | undefined
    let from: 'header' | 'subdomain' | 'domain' | undefined
    let resolvedTenant: { id: string; slug: string; schema_name: string } | undefined

    if (precedence === 'header_then_subdomain' && headerTenant) {
      tenantIdOrSlug = headerTenant
      from = 'header'
    } else {
      const domainResult = await app.pg.query(
        `select t.id, t.slug, t.schema_name
           from public.tenant_domains d
           join public.tenants t on t.id = d.tenant_id
          where lower(d.domain) = $1
            and d.domain_type = 'tenant'
            and d.application_code = 'school'
            and d.is_active
            and t.status = 'active'
          limit 1`,
        [hostname],
      )

      if (domainResult.rowCount) {
        resolvedTenant = domainResult.rows[0]
        from = 'domain'
      } else if (precedence === 'header_then_subdomain') {
        tenantIdOrSlug = subdomain
        from = subdomain ? 'subdomain' : undefined
      } else {
        tenantIdOrSlug = subdomain || headerTenant
        from = subdomain ? 'subdomain' : headerTenant ? 'header' : undefined
      }
    }

    if (!tenantIdOrSlug && !resolvedTenant) {
      reply.code(400)
      throw new Error('Tenant not specified')
    }

    const client = await app.pg.connect()
    try {
      const tenantResult = resolvedTenant
        ? { rowCount: 1, rows: [resolvedTenant] }
        : await client.query(
          `select id, slug, schema_name from public.tenants where (id::text = $1 or slug = $1) and status = 'active' limit 1`,
          [tenantIdOrSlug],
        )

      if (tenantResult.rowCount === 0) {
        reply.code(404)
        throw new Error('Tenant not found')
      }

      const tenant = tenantResult.rows[0]
      if (!/^[a-z_][a-z0-9_]{0,62}$/.test(tenant.schema_name)) {
        throw new Error('Tenant organization has an invalid schema configuration')
      }
      // One database, isolated schemas. schema_name comes from the trusted
      // control-plane registry, never directly from the request.
      await client.query(`select set_config('search_path', format('%I, public', $1), false)`, [tenant.schema_name])

      request.tenant = {
        id: tenant.id,
        slug: tenant.slug,
        schema: tenant.schema_name,
        resolvedBy: from ?? 'header'
      }
      request.dbSchema = tenant.schema_name
      request.db = client
    } catch (err) {
      client.release()
      throw err
    }
  })

  app.addHook('onResponse', async (request) => {
    if (request.db) {
      request.db.release()
    }
  })
})

declare module 'fastify' {
  interface FastifyRequest<
    RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
    RawServer extends RawServerBase = RawServerDefault,
    RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
    SchemaCompiler extends FastifySchema = FastifySchema,
    TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
    ContextConfig = ContextConfigDefault,
    Logger extends FastifyBaseLogger = FastifyBaseLogger,
    RequestType extends FastifyRequestType = ResolveFastifyRequestType<TypeProvider, SchemaCompiler, RouteGeneric>
  > {
    tenant: null | {
      id: string
      slug: string
      schema: string
      resolvedBy: 'header' | 'subdomain' | 'domain'
    }
    db: import('pg').PoolClient | null
    dbSchema: string | null
  }

  interface FastifyContextConfig {
    requireTenant?: boolean
  }

  interface FastifyRouteConfig {
    requireTenant?: boolean
  }
}

