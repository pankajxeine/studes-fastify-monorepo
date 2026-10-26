import type { FastifyPluginAsync } from 'fastify'
import { ApplicationService } from '../../services/catalog/application/ApplicationService'

const ApplicationRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ApplicationService()

  app.get('/application', { config: {"adminPermission":"catalog.application.read"} }, async (request, reply) => {
    const result = await controller.listApplication(app, request)
    return reply.send(result)
  })
  app.post('/application', { config: {"adminPermission":"catalog.application.create"} }, async (request, reply) => {
    const result = await controller.createApplication(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/application/:application_id', { config: {"adminPermission":"catalog.application.read"} }, async (request, reply) => {
    const result = await controller.getApplicationById(app, request)
    return reply.send(result)
  })
  app.put('/application/:application_id', { config: {"adminPermission":"catalog.application.update"} }, async (request, reply) => {
    const result = await controller.updateApplication(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/application/:application_id', { config: {"adminPermission":"catalog.application.delete"} }, async (request, reply) => {
    const result = await controller.deleteApplication(app, request)
    return reply.send(result)
  })
}

export default ApplicationRoutes
