import type { GetCpanelRouteDomainResponse } from './types/GetCpanelRouteDomainResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import { QueryTypes } from 'sequelize'
import type { CommonController } from './CommonController'
import { BadRequestError, ConflictError, NotFoundError } from '../../core/errors/http-errors'

type DomainRouteRow = Omit<GetCpanelRouteDomainResponse, 'images' | 'config' | 'settings'> & {
  images: unknown
  config: unknown
  settings: unknown
}

function normalizeHostname(value: string): string {
  const hostname = value.trim().toLowerCase().replace(/\.$/, '')
  if (!hostname || hostname.length > 253 || !/^(?=.{1,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/i.test(hostname)) {
    throw new BadRequestError('A valid hostname is required')
  }
  return hostname
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function databaseError(error: unknown): unknown {
  if (typeof error === 'object' && error !== null && 'original' in error) {
    const original = (error as { original?: { code?: string } }).original
    if (original?.code === '23505') return new ConflictError('An organization with the same slug, schema, or domain already exists')
  }
  return error
}

export class CommonService implements CommonController {
  public async onboardCrmOrganization(app: FastifyInstance, input: {
    name: string
    slug: string
    schema_name: string
    domain: string
    db_name?: string
    title?: string
    description?: string
    api_endpoint?: string
    web_endpoint?: string
    logo_url?: string
    favicon_url?: string
    images?: string[]
    config?: Record<string, unknown>
  }, request?: FastifyRequest): Promise<void> {
    try {
      const slug = input.slug.trim().toLowerCase()
      const schemaName = input.schema_name.trim().toLowerCase()
      const domain = normalizeHostname(input.domain)
      if (!input.name.trim()) throw new BadRequestError('Organization name is required')
      if (!/^[a-z][a-z0-9-]{1,62}$/.test(slug)) throw new BadRequestError('Organization slug is invalid')
      if (!/^[a-z_][a-z0-9_]{0,62}$/.test(schemaName)) throw new BadRequestError('Organization schema name is invalid')
      if (input.config !== undefined && !isRecord(input.config)) throw new BadRequestError('Organization config must be an object')

      await app.db.transaction(async (transaction) => {
        const schemas = await app.db.query<{ exists: boolean }>(
          'SELECT EXISTS (SELECT 1 FROM pg_namespace WHERE nspname = :schemaName) AS exists',
          { replacements: { schemaName }, type: QueryTypes.SELECT, transaction },
        )
        if (!schemas[0]?.exists) throw new BadRequestError('Organization schema is not provisioned')

        const tenants = await app.db.query<{ id: string }>(
          `INSERT INTO public.tenants (name, slug, schema_name, db_name, tenant_type, status)
           VALUES (:name, :slug, :schemaName, :dbName, 'crm', 'active')
           RETURNING id::text`,
          {
            replacements: { name: input.name.trim(), slug, schemaName, dbName: input.db_name?.trim() || null },
            type: QueryTypes.SELECT,
            transaction,
          },
        )
        const tenant = tenants[0]
        if (!tenant) throw new Error('Organization registration did not return a tenant ID')

        await app.db.query(
          `INSERT INTO public.tenant_domains
             (tenant_id, domain, domain_type, application_code, name, title, description,
              api_endpoint, web_endpoint, logo_url, favicon_url, images, config, is_active, is_primary)
           VALUES
             (:tenantId, :domain, 'crm', 'crm', :name, :title, :description,
              :apiEndpoint, :webEndpoint, :logoUrl, :faviconUrl, CAST(:images AS jsonb), CAST(:config AS jsonb), true, true)`,
          {
            replacements: {
              tenantId: tenant.id,
              domain,
              name: input.name.trim(),
              title: input.title?.trim() || input.name.trim(),
              description: input.description?.trim() || null,
              apiEndpoint: input.api_endpoint?.trim() || null,
              webEndpoint: input.web_endpoint?.trim() || null,
              logoUrl: input.logo_url?.trim() || null,
              faviconUrl: input.favicon_url?.trim() || null,
              images: JSON.stringify(input.images ?? []),
              config: JSON.stringify(input.config ?? {}),
            },
            transaction,
          },
        )

        await app.db.query(
          `SELECT cpanel_router.register_crm_tenant(
             CAST(:tenantId AS uuid), :domain, :schemaName,
             :dbName, :name, :title, :description,
             :apiEndpoint, :webEndpoint, :logoUrl, :faviconUrl,
             CAST(:images AS jsonb), CAST(:config AS jsonb)
           ) AS registration_id`,
          {
            replacements: {
              tenantId: tenant.id,
              domain,
              schemaName,
              dbName: input.db_name?.trim() || null,
              name: input.name.trim(),
              title: input.title?.trim() || input.name.trim(),
              description: input.description?.trim() || null,
              apiEndpoint: input.api_endpoint?.trim() || null,
              webEndpoint: input.web_endpoint?.trim() || null,
              logoUrl: input.logo_url?.trim() || null,
              faviconUrl: input.favicon_url?.trim() || null,
              images: JSON.stringify(input.images ?? []),
              config: JSON.stringify(input.config ?? {}),
            },
            type: QueryTypes.SELECT,
            transaction,
          },
        )
      })
      void request
    } catch (err) {
      const mappedError = databaseError(err)
      app.log.error(mappedError)
      throw mappedError
    }
  }

  public async cpanelRouteDomain(app: FastifyInstance, request?: FastifyRequest): Promise<GetCpanelRouteDomainResponse> {
    try {
      const params = (request?.params ?? {}) as { domain?: string }
      const domain = normalizeHostname(params.domain ?? request?.hostname ?? '')
      const rows = await app.db.query<DomainRouteRow>(
        `SELECT d.domain, d.domain_type, d.application_code, d.tenant_id::text,
                NULL::text AS tenant_application_id, d.db_name, COALESCE(d.schema_name::text, d.domain) AS slug,
                NULL::text AS domain_shortcode, d.name, d.title, d.description,
                d.api_endpoint, d.web_endpoint, d.logo_url, d.favicon_url,
                d.images, d.config, NULL::jsonb AS settings
           FROM cpanel_router.domains_route d
          WHERE lower(d.domain) = :domain
            AND d.is_active
          LIMIT 1`,
        { replacements: { domain }, type: QueryTypes.SELECT },
      )
      const route = rows[0]
      if (!route) throw new NotFoundError('No active route is configured for this hostname')
      const { images, config, settings, ...routeFields } = route

      return {
        ...routeFields,
        name: route.name || route.slug,
        title: route.title || route.name || route.slug,
        images: Array.isArray(images) ? images.filter((image): image is string => typeof image === 'string') : [],
        config: isRecord(config) ? config : {},
        ...(isRecord(settings) ? { settings } : {}),
      }
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
