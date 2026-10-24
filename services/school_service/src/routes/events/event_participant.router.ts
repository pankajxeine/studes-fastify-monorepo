import type { FastifyPluginAsync } from 'fastify'
import { EventParticipantService } from '../../services/events/event_participant/EventParticipantService'

const EventParticipantRoutes: FastifyPluginAsync = async (app) => {
  const controller = new EventParticipantService()

  app.get('/event_participant', async (request, reply) => {
    const result = await controller.listEventParticipant(app, request)
    return reply.send(result)
  })
  app.post('/event_participant', async (request, reply) => {
    const result = await controller.createEventParticipant(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/event_participant/:id', async (request, reply) => {
    const result = await controller.getEventParticipantById(app, request)
    return reply.send(result)
  })
  app.put('/event_participant/:id', async (request, reply) => {
    const result = await controller.updateEventParticipant(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/event_participant/:id', async (request, reply) => {
    const result = await controller.deleteEventParticipant(app, request)
    return reply.send(result)
  })
}

export default EventParticipantRoutes
