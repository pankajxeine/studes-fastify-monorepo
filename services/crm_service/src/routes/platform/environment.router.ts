import type { FastifyPluginAsync } from 'fastify'
import { EnvironmentService } from '../../services/platform/environment/EnvironmentService'

const EnvironmentRoutes: FastifyPluginAsync = async (app) => {
  const controller = new EnvironmentService()

  app.get('/environment', { config: {"adminPermission":"platform.environment.read"} }, async (request, reply) => {
    const result = await controller.listEnvironment(app, request)
    return reply.send(result)
  })
  app.post('/environment', { config: {"adminPermission":"platform.environment.create"} }, async (request, reply) => {
    const result = await controller.createEnvironment(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/environment/:environment_id', { config: {"adminPermission":"platform.environment.read"} }, async (request, reply) => {
    const result = await controller.getEnvironmentById(app, request)
    return reply.send(result)
  })
  app.put('/environment/:environment_id', { config: {"adminPermission":"platform.environment.update"} }, async (request, reply) => {
    const result = await controller.updateEnvironment(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/environment/:environment_id', { config: {"adminPermission":"platform.environment.delete"} }, async (request, reply) => {
    const result = await controller.deleteEnvironment(app, request)
    return reply.send(result)
  })
}

export default EnvironmentRoutes
