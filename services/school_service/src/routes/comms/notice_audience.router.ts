import type { FastifyPluginAsync } from 'fastify'
import { NoticeAudienceService } from '../../services/comms/notice_audience/NoticeAudienceService'

const NoticeAudienceRoutes: FastifyPluginAsync = async (app) => {
  const controller = new NoticeAudienceService()

  app.get('/notice_audience', async (request, reply) => {
    const result = await controller.listNoticeAudience(app, request)
    return reply.send(result)
  })
  app.post('/notice_audience', async (request, reply) => {
    const result = await controller.createNoticeAudience(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/notice_audience/:id', async (request, reply) => {
    const result = await controller.getNoticeAudienceById(app, request)
    return reply.send(result)
  })
  app.put('/notice_audience/:id', async (request, reply) => {
    const result = await controller.updateNoticeAudience(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/notice_audience/:id', async (request, reply) => {
    const result = await controller.deleteNoticeAudience(app, request)
    return reply.send(result)
  })
}

export default NoticeAudienceRoutes
