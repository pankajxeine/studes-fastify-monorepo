import { Pool } from 'pg'
import fs from 'node:fs'
import path from 'node:path'

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL })
  const sqlPath = path.resolve(__dirname, '../infra/sql/sample-data.sql')
  const sql = fs.readFileSync(sqlPath, 'utf8')

  try {
    await pool.query(sql)
    console.log('seed completed')
  } finally {
    await pool.end()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
