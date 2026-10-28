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
    // const hostname = request.hostname.toLowerCase().replace(/\.$/, '')
    // const rows = await app.db.query<OrganizationRoute>(
    //   `SELECT d.tenant_id::text AS id, d.schema_name::text AS slug,
    //           d.schema_name::text AS schema_name, d.domain_type
    //      FROM cpanel_router.domains_route d
    //     WHERE lower(d.domain) = :hostname
    //       AND d.domain_type IN ('crm', 'cpanel')
    //       AND d.is_active
    //     LIMIT 1`,
    //   { replacements: { hostname }, type: QueryTypes.SELECT },
    // )

    // const organization = rows[0]
    // if (!organization) {
    //   throw new NotFoundError('No CRM organization is configured for this hostname')
    // }
    // if (!/^[a-z_][a-z0-9_]{0,62}$/.test(organization.schema_name)) {
    //   throw new Error('CRM organization has an invalid schema configuration')
    // }

    // request.organization = {
    //   id: organization.id,
    //   slug: organization.slug,
    //   schema: organization.schema_name,
    //   domainType: organization.domain_type,
    // }
    const headerSlugName = request.headers['x-domain-slug'] as string | undefined;
    const domainApp = request.headers['x-domain-app'] as string | undefined;
    if (!headerSlugName) {
      throw new Error('CRM organization has an invalid schema configuration headerSlugName missed')
    }

    if (!domainApp) {
      throw new Error('CRM organization has an invalid domain configuration ')
    }

    request.dbSchema = headerSlugName
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
