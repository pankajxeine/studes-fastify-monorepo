import type { FastifyPluginAsync } from 'fastify'
import { NoticeReadService } from '../../services/comms/notice_read/NoticeReadService'

const NoticeReadRoutes: FastifyPluginAsync = async (app) => {
  const controller = new NoticeReadService()

  app.get('/notice_read', async (request, reply) => {
    const result = await controller.listNoticeRead(app, request)
    return reply.send(result)
  })
  app.post('/notice_read', async (request, reply) => {
    const result = await controller.createNoticeRead(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/notice_read/:id', async (request, reply) => {
    const result = await controller.getNoticeReadById(app, request)
    return reply.send(result)
  })
  app.put('/notice_read/:id', async (request, reply) => {
    const result = await controller.updateNoticeRead(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/notice_read/:id', async (request, reply) => {
    const result = await controller.deleteNoticeRead(app, request)
    return reply.send(result)
  })
}

export default NoticeReadRoutes
