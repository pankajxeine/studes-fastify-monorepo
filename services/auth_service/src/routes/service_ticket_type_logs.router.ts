import type { FastifyPluginAsync } from 'fastify'
import { ServiceTicketTypeLogsService } from '../services/cpanel/service_ticket_type_logs/ServiceTicketTypeLogsService'

const ServiceTicketTypeLogsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ServiceTicketTypeLogsService()

  app.get('/service_ticket_type_logs', async (request, reply) => {
    const result = await controller.listServiceTicketTypeLogs(app, request)
    return reply.send(result)
  })
  app.post('/service_ticket_type_logs', async (request, reply) => {
    const result = await controller.createServiceTicketTypeLog(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/service_ticket_type_logs/:id', async (request, reply) => {
    const result = await controller.getServiceTicketTypeLogsById(app, request)
    return reply.send(result)
  })
  app.put('/service_ticket_type_logs/:id', async (request, reply) => {
    const result = await controller.updateServiceTicketTypeLog(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/service_ticket_type_logs/:id', async (request, reply) => {
    const result = await controller.deleteServiceTicketTypeLog(app, request)
    return reply.send(result)
  })
}

export default ServiceTicketTypeLogsRoutes
