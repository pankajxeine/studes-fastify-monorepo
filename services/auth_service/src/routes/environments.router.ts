import type { FastifyPluginAsync } from 'fastify'
import { EnvironmentsService } from '../services/cpanels/environments/EnvironmentsService'

const EnvironmentsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new EnvironmentsService()

  app.get('/environments', async (request, reply) => {
    const result = await controller.listEnvironments(app, request)
    return reply.send(result)
  })
  app.post('/environments', async (request, reply) => {
    const result = await controller.createEnvironment(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/environments/:id', async (request, reply) => {
    const result = await controller.getEnvironmentsById(app, request)
    return reply.send(result)
  })
  app.put('/environments/:id', async (request, reply) => {
    const result = await controller.updateEnvironment(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/environments/:id', async (request, reply) => {
    const result = await controller.deleteEnvironment(app, request)
    return reply.send(result)
  })
}

export default EnvironmentsRoutes
