import type { FastifyPluginAsync } from 'fastify'
import { ActivityService } from '../../services/crm/activity/ActivityService'

const ActivityRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ActivityService()

  app.get('/activity', { config: {"adminPermission":"crm.activity.read"} }, async (request, reply) => {
    const result = await controller.listActivity(app, request)
    return reply.send(result)
  })
  app.post('/activity', { config: {"adminPermission":"crm.activity.create"} }, async (request, reply) => {
    const result = await controller.createActivity(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/activity/:activity_id', { config: {"adminPermission":"crm.activity.read"} }, async (request, reply) => {
    const result = await controller.getActivityById(app, request)
    return reply.send(result)
  })
  app.put('/activity/:activity_id', { config: {"adminPermission":"crm.activity.update"} }, async (request, reply) => {
    const result = await controller.updateActivity(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/activity/:activity_id', { config: {"adminPermission":"crm.activity.delete"} }, async (request, reply) => {
    const result = await controller.deleteActivity(app, request)
    return reply.send(result)
  })
}

export default ActivityRoutes
