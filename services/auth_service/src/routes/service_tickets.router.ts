import type { FastifyPluginAsync } from 'fastify'
import { ServiceTicketsService } from '../services/cpanel/service_tickets/ServiceTicketsService'

const ServiceTicketsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ServiceTicketsService()

  app.get('/service_tickets', async (request, reply) => {
    const result = await controller.listServiceTickets(app, request)
    return reply.send(result)
  })
  app.post('/service_tickets', async (request, reply) => {
    const result = await controller.createServiceTicket(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/service_tickets/:id', async (request, reply) => {
    const result = await controller.getServiceTicketsById(app, request)
    return reply.send(result)
  })
  app.put('/service_tickets/:id', async (request, reply) => {
    const result = await controller.updateServiceTicket(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/service_tickets/:id', async (request, reply) => {
    const result = await controller.deleteServiceTicket(app, request)
    return reply.send(result)
  })
}

export default ServiceTicketsRoutes
