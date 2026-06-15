import type { FastifyPluginAsync } from 'fastify'
import { ServiceTicketTypeLogsService } from '../services/service_ticket_type_logs/ServiceTicketTypeLogsService'

const ServiceTicketTypeLogsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ServiceTicketTypeLogsService()
  app.get('/service_ticket_type_logs', async (request, reply) => {
     return await reply.send(controller.listServiceTicketTypeLogs(app, request))
  })
  app.post('/service_ticket_type_logs', async (request, reply) => {
     return await reply.send(controller.createServiceTicketTypeLog(app, request.body as any, request))
  })
  app.get('/service_ticket_type_logs/:id', async (request, reply) => {
     return await reply.send(controller.getServiceTicketTypeLogsById(app, request))
  })
  app.put('/service_ticket_type_logs/:id', async (request, reply) => {
     return await reply.send(controller.updateServiceTicketTypeLog(app, request.body as any, request))
  })
  app.delete('/service_ticket_type_logs/:id', async (request, reply) => {
      await controller.deleteServiceTicketTypeLog(app, request) 

             reply.code(201) 
          
  })
}

export default ServiceTicketTypeLogsRoutes
