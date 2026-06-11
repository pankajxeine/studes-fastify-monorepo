import { FastifyPluginAsync } from 'fastify'
import type { RowDataPacket } from 'mysql2/promise'

type HealthRow = RowDataPacket & {
  ok: number
}

const healthRoutes: FastifyPluginAsync = async (app) => {
  app.get('/health', { config: { requireTenant: false } }, async () => ({ ok: true }))

  app.get('/health/db', { config: { requireTenant: false } }, async () => {
    const [rows] = await app.mysql.execute<HealthRow[]>('select 1 as ok')
    return { ok: rows[0]?.ok === 1 }
  })
}

export default healthRoutes
