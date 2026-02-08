import { FastifyPluginAsync } from 'fastify'

const healthRoutes: FastifyPluginAsync = async (app) => {
  app.get('/health', { config: { requireTenant: false, requireAuth: false } }, async () => ({ ok: true }))
}

export default healthRoutes
