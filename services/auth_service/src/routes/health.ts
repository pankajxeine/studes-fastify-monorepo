import { FastifyPluginAsync } from 'fastify'

const healthRoutes: FastifyPluginAsync = async (app) => {
  app.get('/health', { config: { requireTenant: false } }, async () => ({ ok: true }))

  app.get('/health/db', { config: { requireTenant: false } }, async () => {
    const client = await app.pg.connect()
    try {
      const result = await client.query('select 1 as ok')
      return { ok: result.rows[0]?.ok === 1 }
    } finally {
      client.release()
    }
  })
}

export default healthRoutes
