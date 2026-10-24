import type { FastifyPluginAsync } from 'fastify'
import { GuestService } from '../../services/visitor/guest/GuestService'

const GuestRoutes: FastifyPluginAsync = async (app) => {
  const controller = new GuestService()

  app.get('/guest', async (request, reply) => {
    const result = await controller.listGuest(app, request)
    return reply.send(result)
  })
  app.post('/guest', async (request, reply) => {
    const result = await controller.createGuest(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/guest/:id', async (request, reply) => {
    const result = await controller.getGuestById(app, request)
    return reply.send(result)
  })
  app.put('/guest/:id', async (request, reply) => {
    const result = await controller.updateGuest(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/guest/:id', async (request, reply) => {
    const result = await controller.deleteGuest(app, request)
    return reply.send(result)
  })
}

export default GuestRoutes
