import type { FastifyPluginAsync } from 'fastify'
import { MessMenuService } from '../../services/hostel/mess_menu/MessMenuService'

const MessMenuRoutes: FastifyPluginAsync = async (app) => {
  const controller = new MessMenuService()

  app.get('/mess_menu', async (request, reply) => {
    const result = await controller.listMessMenu(app, request)
    return reply.send(result)
  })
  app.post('/mess_menu', async (request, reply) => {
    const result = await controller.createMessMenu(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/mess_menu/:id', async (request, reply) => {
    const result = await controller.getMessMenuById(app, request)
    return reply.send(result)
  })
  app.put('/mess_menu/:id', async (request, reply) => {
    const result = await controller.updateMessMenu(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/mess_menu/:id', async (request, reply) => {
    const result = await controller.deleteMessMenu(app, request)
    return reply.send(result)
  })
}

export default MessMenuRoutes
