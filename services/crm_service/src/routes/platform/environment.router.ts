import type { FastifyPluginAsync } from 'fastify'
import { EnvironmentService } from '../../services/platform/environment/EnvironmentService'

const EnvironmentRoutes: FastifyPluginAsync = async (app) => {
  const controller = new EnvironmentService()

  app.get('/environment', async (request, reply) => {
    const result = await controller.listEnvironment(app, request)
    return reply.send(result)
  })
  app.post('/environment', async (request, reply) => {
    const result = await controller.createEnvironment(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/environment/:id', async (request, reply) => {
    const result = await controller.getEnvironmentById(app, request)
    return reply.send(result)
  })
  app.put('/environment/:id', async (request, reply) => {
    const result = await controller.updateEnvironment(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/environment/:id', async (request, reply) => {
    const result = await controller.deleteEnvironment(app, request)
    return reply.send(result)
  })
}

export default EnvironmentRoutes
