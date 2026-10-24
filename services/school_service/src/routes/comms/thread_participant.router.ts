import type { FastifyPluginAsync } from 'fastify'
import { ThreadParticipantService } from '../../services/comms/thread_participant/ThreadParticipantService'

const ThreadParticipantRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ThreadParticipantService()

  app.get('/thread_participant', async (request, reply) => {
    const result = await controller.listThreadParticipant(app, request)
    return reply.send(result)
  })
  app.post('/thread_participant', async (request, reply) => {
    const result = await controller.createThreadParticipant(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/thread_participant/:id', async (request, reply) => {
    const result = await controller.getThreadParticipantById(app, request)
    return reply.send(result)
  })
  app.put('/thread_participant/:id', async (request, reply) => {
    const result = await controller.updateThreadParticipant(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/thread_participant/:id', async (request, reply) => {
    const result = await controller.deleteThreadParticipant(app, request)
    return reply.send(result)
  })
}

export default ThreadParticipantRoutes
