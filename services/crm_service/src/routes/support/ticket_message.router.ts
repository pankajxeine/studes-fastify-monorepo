import type { FastifyPluginAsync } from 'fastify'
import { TicketMessageService } from '../../services/support/ticket_message/TicketMessageService'

const TicketMessageRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TicketMessageService()

  app.get('/ticket_message', { config: {"adminPermission":"support.ticket_message.read"} }, async (request, reply) => {
    const result = await controller.listTicketMessage(app, request)
    return reply.send(result)
  })
  app.post('/ticket_message', { config: {"adminPermission":"support.ticket_message.create"} }, async (request, reply) => {
    const result = await controller.createTicketMessage(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/ticket_message/:ticket_message_id', { config: {"adminPermission":"support.ticket_message.read"} }, async (request, reply) => {
    const result = await controller.getTicketMessageById(app, request)
    return reply.send(result)
  })
  app.put('/ticket_message/:ticket_message_id', { config: {"adminPermission":"support.ticket_message.update"} }, async (request, reply) => {
    const result = await controller.updateTicketMessage(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/ticket_message/:ticket_message_id', { config: {"adminPermission":"support.ticket_message.delete"} }, async (request, reply) => {
    const result = await controller.deleteTicketMessage(app, request)
    return reply.send(result)
  })
}

export default TicketMessageRoutes
