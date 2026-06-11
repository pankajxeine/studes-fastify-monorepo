import { randomUUID } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { FastifyPluginAsync } from 'fastify'
import { z } from 'zod'
import { escapeId } from 'mysql2'
import type { RowDataPacket } from 'mysql2/promise'

const tenantBodySchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2).regex(/^[a-z0-9-]+$/),
  primaryDomain: z.string().optional(),
  tenantType: z.enum(['school', 'crm']).optional().default('school')
})

type TenantRow = RowDataPacket & {
  id: string
  slug: string
  schema_name: string
}

function readServiceSql(name: string): string {
  return readFileSync(resolve(__dirname, '../../sql', name), 'utf8')
}

const tenantRoutes: FastifyPluginAsync = async (app) => {
  app.post('/tenants', { config: { requireTenant: false } }, async (request, reply) => {
    const body = tenantBodySchema.parse(request.body)
    const schemaPrefix = body.tenantType === 'crm' ? 'crm' : 'tenant'
    const schemaName = `${schemaPrefix}_${body.slug.replace(/-/g, '_')}`
    const tenantId = randomUUID()

    const client = await app.mysql.getConnection()
    try {
      await app.useTenantDatabase(client, app.mysqlDatabase)
      await client.beginTransaction()

      await client.execute(
        'insert into tenants (id, name, slug, schema_name, tenant_type) values (?, ?, ?, ?, ?)',
        [tenantId, body.name, body.slug, schemaName, body.tenantType]
      )

      if (body.primaryDomain) {
        await client.execute(
          'insert into tenant_domains (id, tenant_id, domain, is_primary) values (?, ?, ?, true)',
          [randomUUID(), tenantId, body.primaryDomain]
        )
      }

      await client.commit()

      await client.query(`create database if not exists ${escapeId(schemaName)}`)
      await app.useTenantDatabase(client, schemaName)
      await client.query(readServiceSql('tenant.sql'))

      await app.useTenantDatabase(client, app.mysqlDatabase)
      const [tenants] = await client.execute<TenantRow[]>(
        'select id, slug, schema_name from tenants where id = ? limit 1',
        [tenantId]
      )

      reply.code(201)
      return tenants[0]
    } catch (err) {
      await client.rollback()
      throw err
    } finally {
      client.release()
    }
  })
}

export default tenantRoutes
