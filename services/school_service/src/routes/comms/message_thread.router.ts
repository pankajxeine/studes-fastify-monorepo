import type { FastifyPluginAsync } from 'fastify'
import { MessageThreadService } from '../../services/comms/message_thread/MessageThreadService'

const MessageThreadRoutes: FastifyPluginAsync = async (app) => {
  const controller = new MessageThreadService()

  app.get('/message_thread', async (request, reply) => {
    const result = await controller.listMessageThread(app, request)
    return reply.send(result)
  })
  app.post('/message_thread', async (request, reply) => {
    const result = await controller.createMessageThread(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/message_thread/:id', async (request, reply) => {
    const result = await controller.getMessageThreadById(app, request)
    return reply.send(result)
  })
  app.put('/message_thread/:id', async (request, reply) => {
    const result = await controller.updateMessageThread(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/message_thread/:id', async (request, reply) => {
    const result = await controller.deleteMessageThread(app, request)
    return reply.send(result)
  })
}

export default MessageThreadRoutes
