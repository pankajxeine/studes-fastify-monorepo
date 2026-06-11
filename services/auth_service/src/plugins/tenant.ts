import fp from 'fastify-plugin'
import { z } from 'zod'
import type { RowDataPacket } from 'mysql2/promise'
import type { MysqlConnection } from './db'
import type { ContextConfigDefault, FastifyBaseLogger, FastifySchema, FastifyTypeProvider, FastifyTypeProviderDefault, RawRequestDefaultExpression, RawServerBase, RawServerDefault, RouteGenericInterface } from 'fastify'
import type { FastifyRequestType, ResolveFastifyRequestType } from 'fastify/types/type-provider'
import { BadRequestError } from '../core'

const tenantConfigSchema = z.object({
  requireTenant: z.boolean().optional().default(true)
})

type TenantRow = RowDataPacket & {
  id: string
  slug: string
  schema_name: string
}

export default fp(async (app) => {
  app.decorateRequest('tenant', null)
  app.decorateRequest('db', null)

  app.addHook('onRequest', async (request, reply) => {
    const config = tenantConfigSchema.parse(request.routeOptions.config ?? {})
    if (!config.requireTenant) {
      request.log.info({ route: request.routeOptions.url }, 'tenant resolution skipped')
      return
    }

    const headerName = (app.env?.TENANT_HEADER_NAME ?? process.env.TENANT_HEADER_NAME ?? 'x-tenant-id').toLowerCase()
    const headerSlugName = (app.env?.TENANT_HEADER_SLUG_NAME ?? process.env.TENANT_HEADER_SLUG_NAME ?? 'x-tenant-slug').toLowerCase()
    const precedence = (app.env?.TENANT_HEADER_PRECEDENCE ?? process.env.TENANT_HEADER_PRECEDENCE ?? 'header_then_subdomain') as 'header_then_subdomain' | 'subdomain_then_header'

    const headerTenantId = request.headers[headerName] as string | undefined
    const headerTenantSlug = request.headers[headerSlugName] as string | undefined
    const hostname = (request.hostname || '').toLowerCase()
    const baseDomain = (app.env?.TENANT_BASE_DOMAIN ?? process.env.TENANT_BASE_DOMAIN ?? 'localtest.me').toLowerCase()

    let tenantIdOrSlug: string | undefined
    let from: 'header' | 'subdomain' | undefined

    const subdomain = hostname.endsWith(`.${baseDomain}`)
      ? hostname.slice(0, -1 * (baseDomain.length + 1))
      : undefined

    if (precedence === 'header_then_subdomain') {
      tenantIdOrSlug = headerTenantId || headerTenantSlug || subdomain
      from = headerTenantId || headerTenantSlug ? 'header' : subdomain ? 'subdomain' : undefined
    } else {
      tenantIdOrSlug = subdomain || headerTenantId || headerTenantSlug
      from = subdomain ? 'subdomain' : headerTenantId || headerTenantSlug ? 'header' : undefined
    }

    if (!tenantIdOrSlug) {
      request.log.warn(
        { headerName, headerSlugName, hostname, baseDomain },
        'tenant resolution failed: tenant not specified'
      )
      reply.code(400)
      throw new BadRequestError('Tenant not specified')
    }

    request.log.info(
      { tenantIdOrSlug, resolvedBy: from, hostname },
      'tenant resolution started'
    )

    const client = await app.mysql.getConnection()
    try {
      await app.useTenantDatabase(client, app.mysqlDatabase)
      request.log.info({ database: app.mysqlDatabase }, 'tenant lookup database selected')
      const [tenantRows] = await client.execute<TenantRow[]>(
        'select id, slug, schema_name from tenants where cast(id as char) = ? or slug = ? limit 1',
        [tenantIdOrSlug, tenantIdOrSlug]
      )

      if (tenantRows.length === 0) {
        request.log.warn({ tenantIdOrSlug }, 'tenant resolution failed: tenant not found')
        reply.code(404)
        throw new Error('Tenant not found')
      }

      const tenant = tenantRows[0]
      await app.useTenantDatabase(client, tenant.schema_name)
      request.log.info(
        { tenantId: tenant.id, tenantSlug: tenant.slug, schema: tenant.schema_name, resolvedBy: from },
        'tenant resolved'
      )

      request.tenant = {
        id: tenant.id,
        slug: tenant.slug,
        schema: tenant.schema_name,
        resolvedBy: from ?? 'header'
      }
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
      resolvedBy: 'header' | 'subdomain'
    }
    db: MysqlConnection | null
  }
}

declare module 'fastify' {
  interface FastifyRouteConfig {
    requireTenant?: boolean
  }
}
