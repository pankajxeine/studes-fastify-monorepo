import type { FastifyPluginAsync } from 'fastify'
import { ServiceTicketCommentsService } from '../services/cpanels/service_ticket_comments/ServiceTicketCommentsService'

const ServiceTicketCommentsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ServiceTicketCommentsService()
  app.get('/service_ticket_comments', async (request, reply) => {
     return await reply.send(controller.listServiceTicketComments(app, request))
  })
  app.post('/service_ticket_comments', async (request, reply) => {
     return await reply.send(controller.createServiceTicketComment(app, request.body as any, request))
  })
  app.get('/service_ticket_comments/:id', async (request, reply) => {
     return await reply.send(controller.getServiceTicketCommentsById(app, request))
  })
  app.put('/service_ticket_comments/:id', async (request, reply) => {
     return await reply.send(controller.updateServiceTicketComment(app, request.body as any, request))
  })
  app.delete('/service_ticket_comments/:id', async (request, reply) => {
      await controller.deleteServiceTicketComment(app, request) 

             reply.code(201) 
          
  })
}

export default ServiceTicketCommentsRoutes
