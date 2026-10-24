import type { FastifyPluginAsync } from 'fastify'
import { ApplicationService } from '../../services/admission/application/ApplicationService'

const ApplicationRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ApplicationService()

  app.get('/application', async (request, reply) => {
    const result = await controller.listApplication(app, request)
    return reply.send(result)
  })
  app.post('/application', async (request, reply) => {
    const result = await controller.createApplication(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/application/:id', async (request, reply) => {
    const result = await controller.getApplicationById(app, request)
    return reply.send(result)
  })
  app.put('/application/:id', async (request, reply) => {
    const result = await controller.updateApplication(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/application/:id', async (request, reply) => {
    const result = await controller.deleteApplication(app, request)
    return reply.send(result)
  })
}

export default ApplicationRoutes
