import type { FastifyPluginAsync } from 'fastify'
import { MessageService } from '../../services/comms/message/MessageService'

const MessageRoutes: FastifyPluginAsync = async (app) => {
  const controller = new MessageService()

  app.get('/message', async (request, reply) => {
    const result = await controller.listMessage(app, request)
    return reply.send(result)
  })
  app.post('/message', async (request, reply) => {
    const result = await controller.createMessage(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/message/:id', async (request, reply) => {
    const result = await controller.getMessageById(app, request)
    return reply.send(result)
  })
  app.put('/message/:id', async (request, reply) => {
    const result = await controller.updateMessage(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/message/:id', async (request, reply) => {
    const result = await controller.deleteMessage(app, request)
    return reply.send(result)
  })
}

export default MessageRoutes
