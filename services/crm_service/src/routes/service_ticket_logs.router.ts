import type { FastifyPluginAsync } from 'fastify'
import { ServiceTicketLogsService } from '../services/cpanels/service_ticket_logs/ServiceTicketLogsService'

const ServiceTicketLogsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ServiceTicketLogsService()

  app.get('/service_ticket_logs', async (request, reply) => {
    const result = await controller.listServiceTicketLogs(app, request)
    return reply.send(result)
  })
  app.post('/service_ticket_logs', async (request, reply) => {
    const result = await controller.createServiceTicketLog(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/service_ticket_logs/:id', async (request, reply) => {
    const result = await controller.getServiceTicketLogsById(app, request)
    return reply.send(result)
  })
  app.put('/service_ticket_logs/:id', async (request, reply) => {
    const result = await controller.updateServiceTicketLog(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/service_ticket_logs/:id', async (request, reply) => {
    const result = await controller.deleteServiceTicketLog(app, request)
    return reply.send(result)
  })
}

export default ServiceTicketLogsRoutes
