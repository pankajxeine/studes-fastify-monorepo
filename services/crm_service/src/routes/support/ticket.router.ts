import type { FastifyPluginAsync } from 'fastify'
import { TicketService } from '../../services/support/ticket/TicketService'

const TicketRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TicketService()

  app.get('/ticket', async (request, reply) => {
    const result = await controller.listTicket(app, request)
    return reply.send(result)
  })
  app.post('/ticket', async (request, reply) => {
    const result = await controller.createTicket(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/ticket/:id', async (request, reply) => {
    const result = await controller.getTicketById(app, request)
    return reply.send(result)
  })
  app.put('/ticket/:id', async (request, reply) => {
    const result = await controller.updateTicket(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/ticket/:id', async (request, reply) => {
    const result = await controller.deleteTicket(app, request)
    return reply.send(result)
  })
}

export default TicketRoutes
