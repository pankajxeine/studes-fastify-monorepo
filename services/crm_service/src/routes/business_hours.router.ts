import type { FastifyPluginAsync } from 'fastify'
import { BusinessHoursService } from '../services/cpanels/business_hours/BusinessHoursService'

const BusinessHoursRoutes: FastifyPluginAsync = async (app) => {
  const controller = new BusinessHoursService()

  app.get('/business_hours', async (request, reply) => {
    const result = await controller.listBusinessHours(app, request)
    return reply.send(result)
  })
  app.post('/business_hours', async (request, reply) => {
    const result = await controller.createBusinessHour(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/business_hours/:id', async (request, reply) => {
    const result = await controller.getBusinessHoursById(app, request)
    return reply.send(result)
  })
  app.put('/business_hours/:id', async (request, reply) => {
    const result = await controller.updateBusinessHour(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/business_hours/:id', async (request, reply) => {
    const result = await controller.deleteBusinessHour(app, request)
    return reply.send(result)
  })
}

export default BusinessHoursRoutes
