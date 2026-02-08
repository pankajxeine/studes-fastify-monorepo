import { Pool } from 'pg'
import fs from 'node:fs'
import path from 'node:path'

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL })
  const sql = fs.readFileSync(path.resolve(__dirname, '../infra/sql/bootstrap.sql'), 'utf8')

  try {
    await pool.query(sql)
    console.log('bootstrap completed')
  } finally {
    await pool.end()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
