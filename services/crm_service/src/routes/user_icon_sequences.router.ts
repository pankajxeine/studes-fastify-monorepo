import type { FastifyPluginAsync } from 'fastify'
import { UserIconSequencesService } from '../services/cpanels/user_icon_sequences/UserIconSequencesService'

const UserIconSequencesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new UserIconSequencesService()

  app.get('/user_icon_sequences', async (request, reply) => {
    const result = await controller.listUserIconSequences(app, request)
    return reply.send(result)
  })
  app.post('/user_icon_sequences', async (request, reply) => {
    const result = await controller.createUserIconSequence(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/user_icon_sequences/:id', async (request, reply) => {
    const result = await controller.getUserIconSequencesById(app, request)
    return reply.send(result)
  })
  app.put('/user_icon_sequences/:id', async (request, reply) => {
    const result = await controller.updateUserIconSequence(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/user_icon_sequences/:id', async (request, reply) => {
    const result = await controller.deleteUserIconSequence(app, request)
    return reply.send(result)
  })
}

export default UserIconSequencesRoutes
