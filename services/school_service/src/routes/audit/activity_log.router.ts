import type { FastifyPluginAsync } from 'fastify'
import { ActivityLogService } from '../../services/audit/activity_log/ActivityLogService'

const ActivityLogRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ActivityLogService()

  app.get('/activity_log', async (request, reply) => {
    const result = await controller.listActivityLog(app, request)
    return reply.send(result)
  })
  app.post('/activity_log', async (request, reply) => {
    const result = await controller.createActivityLog(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/activity_log/:id', async (request, reply) => {
    const result = await controller.getActivityLogById(app, request)
    return reply.send(result)
  })
  app.put('/activity_log/:id', async (request, reply) => {
    const result = await controller.updateActivityLog(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/activity_log/:id', async (request, reply) => {
    const result = await controller.deleteActivityLog(app, request)
    return reply.send(result)
  })
}

export default ActivityLogRoutes
