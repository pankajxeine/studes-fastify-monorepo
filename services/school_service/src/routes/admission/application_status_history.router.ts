import type { FastifyPluginAsync } from 'fastify'
import { ApplicationStatusHistoryService } from '../../services/admission/application_status_history/ApplicationStatusHistoryService'

const ApplicationStatusHistoryRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ApplicationStatusHistoryService()

  app.get('/application_status_history', async (request, reply) => {
    const result = await controller.listApplicationStatusHistory(app, request)
    return reply.send(result)
  })
  app.post('/application_status_history', async (request, reply) => {
    const result = await controller.createApplicationStatusHistory(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/application_status_history/:id', async (request, reply) => {
    const result = await controller.getApplicationStatusHistoryById(app, request)
    return reply.send(result)
  })
  app.put('/application_status_history/:id', async (request, reply) => {
    const result = await controller.updateApplicationStatusHistory(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/application_status_history/:id', async (request, reply) => {
    const result = await controller.deleteApplicationStatusHistory(app, request)
    return reply.send(result)
  })
}

export default ApplicationStatusHistoryRoutes
