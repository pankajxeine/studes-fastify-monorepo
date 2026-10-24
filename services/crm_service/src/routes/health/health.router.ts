import type { FastifyPluginAsync } from 'fastify'
import { HealthService } from '../../services/health/HealthService'

const HealthRoutes: FastifyPluginAsync = async (app) => {
  const controller = new HealthService()

  app.get('/health', async (request, reply) => {
    const result = await controller.authHealth(app, request)
    return reply.send(result)
  })
  app.get('/health/db', async (request, reply) => {
    const result = await controller.authHealthDb(app, request)
    return reply.send(result)
  })
}

export default HealthRoutes
