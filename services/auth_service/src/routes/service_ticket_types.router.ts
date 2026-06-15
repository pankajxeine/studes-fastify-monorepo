import type { FastifyPluginAsync } from 'fastify'
import { ServiceTicketTypesService } from '../services/service_ticket_types/ServiceTicketTypesService'

const ServiceTicketTypesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ServiceTicketTypesService()
  app.get('/service_ticket_types', async (request, reply) => {
     return await reply.send(controller.listServiceTicketTypes(app, request))
  })
  app.post('/service_ticket_types', async (request, reply) => {
     return await reply.send(controller.createServiceTicketType(app, request.body as any, request))
  })
  app.get('/service_ticket_types/:id', async (request, reply) => {
     return await reply.send(controller.getServiceTicketTypesById(app, request))
  })
  app.put('/service_ticket_types/:id', async (request, reply) => {
     return await reply.send(controller.updateServiceTicketType(app, request.body as any, request))
  })
  app.delete('/service_ticket_types/:id', async (request, reply) => {
      await controller.deleteServiceTicketType(app, request) 

             reply.code(201) 
          
  })
}

export default ServiceTicketTypesRoutes
