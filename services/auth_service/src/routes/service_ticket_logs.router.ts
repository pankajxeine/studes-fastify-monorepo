import type { FastifyPluginAsync } from 'fastify'
import { ServiceTicketLogsService } from '../services/service_ticket_logs/ServiceTicketLogsService'

const ServiceTicketLogsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ServiceTicketLogsService()
  app.get('/service_ticket_logs', async (request, reply) => {
     return await reply.send(controller.listServiceTicketLogs(app, request))
  })
  app.post('/service_ticket_logs', async (request, reply) => {
     return await reply.send(controller.createServiceTicketLog(app, request.body as any, request))
  })
  app.get('/service_ticket_logs/:id', async (request, reply) => {
     return await reply.send(controller.getServiceTicketLogsById(app, request))
  })
  app.put('/service_ticket_logs/:id', async (request, reply) => {
     return await reply.send(controller.updateServiceTicketLog(app, request.body as any, request))
  })
  app.delete('/service_ticket_logs/:id', async (request, reply) => {
      await controller.deleteServiceTicketLog(app, request) 

             reply.code(201) 
          
  })
}

export default ServiceTicketLogsRoutes
