import type { FastifyPluginAsync } from 'fastify'
import { NoticeService } from '../../services/comms/notice/NoticeService'

const NoticeRoutes: FastifyPluginAsync = async (app) => {
  const controller = new NoticeService()

  app.get('/notice', async (request, reply) => {
    const result = await controller.listNotice(app, request)
    return reply.send(result)
  })
  app.post('/notice', async (request, reply) => {
    const result = await controller.createNotice(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/notice/:id', async (request, reply) => {
    const result = await controller.getNoticeById(app, request)
    return reply.send(result)
  })
  app.put('/notice/:id', async (request, reply) => {
    const result = await controller.updateNotice(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/notice/:id', async (request, reply) => {
    const result = await controller.deleteNotice(app, request)
    return reply.send(result)
  })
}

export default NoticeRoutes
