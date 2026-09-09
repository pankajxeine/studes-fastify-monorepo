import { Pool } from 'pg'

import fs from 'node:fs'
import path from 'node:path'

async function main() {
  const slug = process.argv[2]
  const name = process.argv[3] ?? slug
  if (!slug) {
    throw new Error('Usage: tsx scripts/tenant-create-school.ts <slug> [name]')
  }

  const schemaName = `${slug.replace(/-/g, '_')}_tenant`
  if (!/^[a-zA-Z0-9_]+$/.test(schemaName)) throw new Error('Invalid tenant slug')
  const pool = new Pool({ connectionString: process.env.DATABASE_URL })
  const client = await pool.connect()

  try {
    await client.query('begin')

    const tenantRes = await client.query(
      `insert into public.tenants (name, slug, schema_name) values ($1, $2, $3)
       on conflict (slug) do update set name = excluded.name
       returning id, slug, schema_name`,
      [name, slug, schemaName]
    )

    await client.query(`create schema if not exists "${schemaName}"`)
    await client.query(`set search_path to "${schemaName}", public`)
    const templateSql = fs.readFileSync(path.resolve(__dirname, '../infra/sql/tenant_template.sql'), 'utf8')
    await client.query(templateSql)
    await client.query(`create table if not exists users (
      id uuid primary key default uuid_generate_v4(),
      email text not null unique,
      username text unique,
      password_hash text not null,
      role text not null default 'tenant_user',
      last_login timestamptz,
      status text not null default 'active',
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now()
    )`)

    await client.query('commit')
    console.log('tenant schema created', tenantRes.rows[0])
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
