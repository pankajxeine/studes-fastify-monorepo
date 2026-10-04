import type { FastifyPluginAsync } from 'fastify'
import { ServiceTicketUserContentsService } from '../services/cpanel/service_ticket_user_contents/ServiceTicketUserContentsService'

const ServiceTicketUserContentsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ServiceTicketUserContentsService()

  app.get('/service_ticket_user_contents', async (request, reply) => {
    const result = await controller.listServiceTicketUserContents(app, request)
    return reply.send(result)
  })
  app.post('/service_ticket_user_contents', async (request, reply) => {
    const result = await controller.createServiceTicketUserContent(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/service_ticket_user_contents/:id', async (request, reply) => {
    const result = await controller.getServiceTicketUserContentsById(app, request)
    return reply.send(result)
  })
  app.put('/service_ticket_user_contents/:id', async (request, reply) => {
    const result = await controller.updateServiceTicketUserContent(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/service_ticket_user_contents/:id', async (request, reply) => {
    const result = await controller.deleteServiceTicketUserContent(app, request)
    return reply.send(result)
  })
}

export default ServiceTicketUserContentsRoutes
