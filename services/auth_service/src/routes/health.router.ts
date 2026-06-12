import type { FastifyPluginAsync } from 'fastify'
import { HealthService } from '../services/HealthService'

const HealthRoutes: FastifyPluginAsync = async (app) => {
  const controller = new HealthService()
  app.get('/health', async (request, reply) => {
    return await controller.authHealth(app, request)
  })
  app.get('/health/db', async (request, reply) => {
    return await controller.authHealthDb(app, request)
  })
}

export default HealthRoutes
