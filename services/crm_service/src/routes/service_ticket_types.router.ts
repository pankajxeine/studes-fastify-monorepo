import type { FastifyPluginAsync } from 'fastify'
import { ServiceTicketTypesService } from '../services/cpanels/service_ticket_types/ServiceTicketTypesService'

const ServiceTicketTypesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ServiceTicketTypesService()

  app.get('/service_ticket_types', async (request, reply) => {
    const result = await controller.listServiceTicketTypes(app, request)
    return reply.send(result)
  })
  app.post('/service_ticket_types', async (request, reply) => {
    const result = await controller.createServiceTicketType(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/service_ticket_types/:id', async (request, reply) => {
    const result = await controller.getServiceTicketTypesById(app, request)
    return reply.send(result)
  })
  app.put('/service_ticket_types/:id', async (request, reply) => {
    const result = await controller.updateServiceTicketType(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/service_ticket_types/:id', async (request, reply) => {
    const result = await controller.deleteServiceTicketType(app, request)
    return reply.send(result)
  })
}

export default ServiceTicketTypesRoutes
