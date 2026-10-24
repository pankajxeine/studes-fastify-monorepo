import type { FastifyPluginAsync } from 'fastify'
import { MentorshipService } from '../../services/alumni/mentorship/MentorshipService'

const MentorshipRoutes: FastifyPluginAsync = async (app) => {
  const controller = new MentorshipService()

  app.get('/mentorship', async (request, reply) => {
    const result = await controller.listMentorship(app, request)
    return reply.send(result)
  })
  app.post('/mentorship', async (request, reply) => {
    const result = await controller.createMentorship(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/mentorship/:id', async (request, reply) => {
    const result = await controller.getMentorshipById(app, request)
    return reply.send(result)
  })
  app.put('/mentorship/:id', async (request, reply) => {
    const result = await controller.updateMentorship(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/mentorship/:id', async (request, reply) => {
    const result = await controller.deleteMentorship(app, request)
    return reply.send(result)
  })
}

export default MentorshipRoutes
