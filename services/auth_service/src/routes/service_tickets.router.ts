import type { FastifyPluginAsync } from 'fastify'
import { ServiceTicketsService } from '../services/cpanel/service_tickets/ServiceTicketsService'

const ServiceTicketsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ServiceTicketsService()

  app.get('/service_tickets', async (request, reply) => {
    
    return await reply.send(controller.listServiceTickets(app, request))
  })
  app.post('/service_tickets', async (request, reply) => {
    return await reply.send(controller.createServiceTicket(app, request.body as any, request))
  })
  app.get('/service_tickets/:id', async (request, reply) => {
    
    return await reply.send(controller.getServiceTicketsById(app, request))
  })
  app.put('/service_tickets/:id', async (request, reply) => {
    return await reply.send(controller.updateServiceTicket(app, request.body as any, request))
  })
  app.delete('/service_tickets/:id', async (request, reply) => {
    
    return await reply.send(controller.deleteServiceTicket(app, request))
  })
}

export default ServiceTicketsRoutes
