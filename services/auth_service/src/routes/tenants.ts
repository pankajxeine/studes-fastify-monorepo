import { FastifyPluginAsync } from 'fastify'
import { z } from 'zod'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const tenantBodySchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2).regex(/^[a-z0-9-]+$/),
  primaryDomain: z.string().optional(),
  tenantType: z.enum(['school', 'crm']).optional().default('school')
})

function readServiceSql(name: string): string {
  return readFileSync(resolve(__dirname, '../../sql', name), 'utf8')
}

function readInfraSql(name: string): string {
  return readFileSync(resolve(__dirname, '../../../../infra/sql', name), 'utf8')
}

const tenantRoutes: FastifyPluginAsync = async (app) => {
  app.post('/tenants', { config: { requireTenant: false } }, async (request, reply) => {
    const body = tenantBodySchema.parse(request.body)
    const schemaPrefix = body.tenantType === 'crm' ? 'crm' : 'tenant'
    const schemaName = `${schemaPrefix}_${body.slug.replace(/-/g, '_')}`

    const client = await app.pg.connect()
    try {
      await client.query('begin')

      const tenantRes = await client.query(
        `insert into public.tenants (name, slug, schema_name, tenant_type) values ($1, $2, $3, $4) returning id, slug, schema_name`,
        [body.name, body.slug, schemaName, body.tenantType]
      )

      if (body.primaryDomain) {
        await client.query(
          `insert into public.tenant_domains (tenant_id, domain, is_primary) values ($1, $2, true)`,
          [tenantRes.rows[0].id, body.primaryDomain]
        )
      }

      await client.query(`create schema if not exists ${schemaName}`)
      await client.query(`set search_path to ${schemaName}, public`)

      const templateSql = body.tenantType === 'crm'
        ? readInfraSql('crm_tenant_template.sql')
        : readInfraSql('tenant_template.sql')
      await client.query(templateSql)

      const authSql = readServiceSql('tenant.sql')
      await client.query(authSql)

      await client.query('commit')

      reply.code(201)
      return tenantRes.rows[0]
    } catch (err) {
      await client.query('rollback')
      throw err
    } finally {
      client.release()
    }
  })
}

export default tenantRoutes
