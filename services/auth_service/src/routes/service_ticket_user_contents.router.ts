import type { FastifyPluginAsync } from 'fastify'
import { ServiceTicketUserContentsService } from '../services/cpanels/service_ticket_user_contents/ServiceTicketUserContentsService'

const ServiceTicketUserContentsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ServiceTicketUserContentsService()
  app.get('/service_ticket_user_contents', async (request, reply) => {
     return await reply.send(controller.listServiceTicketUserContents(app, request))
  })
  app.post('/service_ticket_user_contents', async (request, reply) => {
     return await reply.send(controller.createServiceTicketUserContent(app, request.body as any, request))
  })
  app.get('/service_ticket_user_contents/:id', async (request, reply) => {
     return await reply.send(controller.getServiceTicketUserContentsById(app, request))
  })
  app.put('/service_ticket_user_contents/:id', async (request, reply) => {
     return await reply.send(controller.updateServiceTicketUserContent(app, request.body as any, request))
  })
  app.delete('/service_ticket_user_contents/:id', async (request, reply) => {
      await controller.deleteServiceTicketUserContent(app, request) 

             reply.code(201) 
          
  })
}

export default ServiceTicketUserContentsRoutes
