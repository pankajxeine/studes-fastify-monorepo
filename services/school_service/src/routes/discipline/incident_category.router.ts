import type { FastifyPluginAsync } from 'fastify'
import { IncidentCategoryService } from '../../services/discipline/incident_category/IncidentCategoryService'

const IncidentCategoryRoutes: FastifyPluginAsync = async (app) => {
  const controller = new IncidentCategoryService()

  app.get('/incident_category', async (request, reply) => {
    const result = await controller.listIncidentCategory(app, request)
    return reply.send(result)
  })
  app.post('/incident_category', async (request, reply) => {
    const result = await controller.createIncidentCategory(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/incident_category/:id', async (request, reply) => {
    const result = await controller.getIncidentCategoryById(app, request)
    return reply.send(result)
  })
  app.put('/incident_category/:id', async (request, reply) => {
    const result = await controller.updateIncidentCategory(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/incident_category/:id', async (request, reply) => {
    const result = await controller.deleteIncidentCategory(app, request)
    return reply.send(result)
  })
}

export default IncidentCategoryRoutes
