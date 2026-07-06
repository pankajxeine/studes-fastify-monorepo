import type { FastifyPluginAsync } from 'fastify'
import { HealthService } from '../services/health/HealthService'

const HealthRoutes: FastifyPluginAsync = async (app) => {
  const controller = new HealthService()

  app.get('/health', async (request, reply) => {
    
    return await reply.send(controller.authHealth(app, request))
  })
  app.get('/health/db', async (request, reply) => {
    
    return await reply.send(controller.authHealthDb(app, request))
  })
}

export default HealthRoutes
