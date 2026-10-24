import type { FastifyPluginAsync } from 'fastify'
import { GuestLectureService } from '../../services/visitor/guest_lecture/GuestLectureService'

const GuestLectureRoutes: FastifyPluginAsync = async (app) => {
  const controller = new GuestLectureService()

  app.get('/guest_lecture', async (request, reply) => {
    const result = await controller.listGuestLecture(app, request)
    return reply.send(result)
  })
  app.post('/guest_lecture', async (request, reply) => {
    const result = await controller.createGuestLecture(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/guest_lecture/:id', async (request, reply) => {
    const result = await controller.getGuestLectureById(app, request)
    return reply.send(result)
  })
  app.put('/guest_lecture/:id', async (request, reply) => {
    const result = await controller.updateGuestLecture(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/guest_lecture/:id', async (request, reply) => {
    const result = await controller.deleteGuestLecture(app, request)
    return reply.send(result)
  })
}

export default GuestLectureRoutes
