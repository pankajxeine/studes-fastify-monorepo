import { Pool } from 'pg'
import fs from 'node:fs'
import path from 'node:path'

async function main() {
  const slug = process.argv[2]
  if (!slug) {
    throw new Error('Usage: tsx scripts/tenant-seed-school.ts <slug>')
  }

  const schemaName = `tenant_${slug.replace(/-/g, '_')}`
  const pool = new Pool({ connectionString: process.env.DATABASE_URL })
  const client = await pool.connect()

  try {
    await client.query('begin')
    await client.query(`set search_path to ${schemaName}, public`)

    const seedSql = fs.readFileSync(path.resolve(__dirname, '../infra/sql/tenant_seed.sql'), 'utf8')
    await client.query(seedSql)

    await client.query('commit')
    console.log('tenant seed completed', schemaName)
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
