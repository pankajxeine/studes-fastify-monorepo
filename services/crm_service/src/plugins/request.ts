import fp from 'fastify-plugin'
import type { FastifyRequest } from 'fastify'
import { QueryTypes } from 'sequelize'
import { NotFoundError } from '../core/errors/http-errors'
import { registerGeneratedEntityDecorators } from '../entities'
import { sequelize } from './db'

type OrganizationRoute = {
  id: string
  slug: string
  schema_name: string
  domain_type: 'crm' | 'cpanel'
}

/** Resolves the CRM organization from its configured host before protected routes run. */
export default fp(async (app) => {
  app.decorateRequest('dbSchema', null)
  app.decorateRequest('organization', null)

  registerGeneratedEntityDecorators(app, sequelize)

  app.addHook('onRequest', async (request) => {
    // The bootstrap endpoint reads only the global public directory and can be
    // called before the browser has selected an organization session.
    if (request.method === 'GET' && request.routeOptions.url === '/cpanelroutes/:domain?') return

    const hostname = request.hostname.toLowerCase().replace(/\.$/, '')
    const rows = await app.db.query<OrganizationRoute>(
      `SELECT t.id::text, t.slug, t.schema_name, d.domain_type
         FROM public.tenant_domains d
         JOIN public.tenants t ON t.id = d.tenant_id
        WHERE lower(d.domain) = :hostname
          AND d.domain_type IN ('crm', 'cpanel')
          AND d.is_active
          AND t.status = 'active'
        LIMIT 1`,
      { replacements: { hostname }, type: QueryTypes.SELECT },
    )

    const organization = rows[0]
    if (!organization) {
      throw new NotFoundError('No CRM organization is configured for this hostname')
    }
    if (!/^[a-z_][a-z0-9_]{0,62}$/.test(organization.schema_name)) {
      throw new Error('CRM organization has an invalid schema configuration')
    }

    request.organization = {
      id: organization.id,
      slug: organization.slug,
      schema: organization.schema_name,
      domainType: organization.domain_type,
    }
    request.dbSchema = organization.schema_name
  })
})

declare module 'fastify' {
  interface FastifyRequest {
    dbSchema: string | null
    organization: {
      id: string
      slug: string
      schema: string
      domainType: 'crm' | 'cpanel'
    } | null
  }
}
