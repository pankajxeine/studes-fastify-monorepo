import type { FastifyPluginAsync } from 'fastify'
import { EventService } from '../../services/audit/event/EventService'

const EventRoutes: FastifyPluginAsync = async (app) => {
  const controller = new EventService()

  app.get('/event', async (request, reply) => {
    const result = await controller.listEvent(app, request)
    return reply.send(result)
  })
  app.post('/event', async (request, reply) => {
    const result = await controller.createEvent(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/event/:id', async (request, reply) => {
    const result = await controller.getEventById(app, request)
    return reply.send(result)
  })
  app.put('/event/:id', async (request, reply) => {
    const result = await controller.updateEvent(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/event/:id', async (request, reply) => {
    const result = await controller.deleteEvent(app, request)
    return reply.send(result)
  })
}

export default EventRoutes
