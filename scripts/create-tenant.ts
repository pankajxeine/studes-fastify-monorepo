import { Pool } from 'pg'
import fs from 'node:fs'
import path from 'node:path'

function loadServiceSql(serviceName: string): string {
  const filePath = path.resolve(__dirname, `../services/${serviceName}/sql/tenant.sql`)
  return fs.readFileSync(filePath, 'utf8')
}

async function main() {
  const slug = process.argv[2]
  const name = process.argv[3] ?? slug
  if (!slug) {
    throw new Error('Usage: tsx scripts/create-tenant.ts <slug> [name]')
  }

  const schemaName = `tenant_${slug.replace(/-/g, '_')}`
  const pool = new Pool({ connectionString: process.env.DATABASE_URL })
  const client = await pool.connect()

  try {
    await client.query('begin')
    const tenantRes = await client.query(
      `insert into public.tenants (name, slug, schema_name) values ($1, $2, $3) returning id, slug, schema_name`,
      [name, slug, schemaName]
    )

    await client.query(`create schema if not exists ${schemaName}`)
    await client.query(`set search_path to ${schemaName}, public`)

    const services = ['auth_service', 'billing_service', 'notification_service']
    for (const svc of services) {
      const sql = loadServiceSql(svc)
      await client.query(sql)
    }

    await client.query('commit')
    console.log('tenant created', tenantRes.rows[0])
  } catch (err) {
    await client.query('rollback')
    throw err
  } finally {
    client.release()
    await pool.end()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
