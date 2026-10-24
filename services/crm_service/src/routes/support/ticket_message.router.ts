import type { FastifyPluginAsync } from 'fastify'
import { TicketMessageService } from '../../services/support/ticket_message/TicketMessageService'

const TicketMessageRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TicketMessageService()

  app.get('/ticket_message', async (request, reply) => {
    const result = await controller.listTicketMessage(app, request)
    return reply.send(result)
  })
  app.post('/ticket_message', async (request, reply) => {
    const result = await controller.createTicketMessage(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/ticket_message/:id', async (request, reply) => {
    const result = await controller.getTicketMessageById(app, request)
    return reply.send(result)
  })
  app.put('/ticket_message/:id', async (request, reply) => {
    const result = await controller.updateTicketMessage(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/ticket_message/:id', async (request, reply) => {
    const result = await controller.deleteTicketMessage(app, request)
    return reply.send(result)
  })
}

export default TicketMessageRoutes
