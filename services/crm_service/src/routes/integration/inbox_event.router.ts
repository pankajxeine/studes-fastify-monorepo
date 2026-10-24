import type { FastifyPluginAsync } from 'fastify'
import { InboxEventService } from '../../services/integration/inbox_event/InboxEventService'

const InboxEventRoutes: FastifyPluginAsync = async (app) => {
  const controller = new InboxEventService()

  app.get('/inbox_event', async (request, reply) => {
    const result = await controller.listInboxEvent(app, request)
    return reply.send(result)
  })
  app.post('/inbox_event', async (request, reply) => {
    const result = await controller.createInboxEvent(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/inbox_event/:id', async (request, reply) => {
    const result = await controller.getInboxEventById(app, request)
    return reply.send(result)
  })
  app.put('/inbox_event/:id', async (request, reply) => {
    const result = await controller.updateInboxEvent(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/inbox_event/:id', async (request, reply) => {
    const result = await controller.deleteInboxEvent(app, request)
    return reply.send(result)
  })
}

export default InboxEventRoutes
