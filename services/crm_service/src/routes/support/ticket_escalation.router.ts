import type { FastifyPluginAsync } from 'fastify'
import { TicketEscalationService } from '../../services/support/ticket_escalation/TicketEscalationService'

const TicketEscalationRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TicketEscalationService()

  app.get('/ticket_escalation', async (request, reply) => {
    const result = await controller.listTicketEscalation(app, request)
    return reply.send(result)
  })
  app.post('/ticket_escalation', async (request, reply) => {
    const result = await controller.createTicketEscalation(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/ticket_escalation/:id', async (request, reply) => {
    const result = await controller.getTicketEscalationById(app, request)
    return reply.send(result)
  })
  app.put('/ticket_escalation/:id', async (request, reply) => {
    const result = await controller.updateTicketEscalation(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/ticket_escalation/:id', async (request, reply) => {
    const result = await controller.deleteTicketEscalation(app, request)
    return reply.send(result)
  })
}

export default TicketEscalationRoutes
