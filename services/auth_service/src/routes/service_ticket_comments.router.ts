import type { FastifyPluginAsync } from 'fastify'
import { ServiceTicketCommentsService } from '../services/cpanel/service_ticket_comments/ServiceTicketCommentsService'

const ServiceTicketCommentsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ServiceTicketCommentsService()

  app.get('/service_ticket_comments', async (request, reply) => {
    const result = await controller.listServiceTicketComments(app, request)
    return reply.send(result)
  })
  app.post('/service_ticket_comments', async (request, reply) => {
    const result = await controller.createServiceTicketComment(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/service_ticket_comments/:id', async (request, reply) => {
    const result = await controller.getServiceTicketCommentsById(app, request)
    return reply.send(result)
  })
  app.put('/service_ticket_comments/:id', async (request, reply) => {
    const result = await controller.updateServiceTicketComment(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/service_ticket_comments/:id', async (request, reply) => {
    const result = await controller.deleteServiceTicketComment(app, request)
    return reply.send(result)
  })
}

export default ServiceTicketCommentsRoutes
