import type { FastifyPluginAsync } from 'fastify'
import { ActivityService } from '../../services/crm/activity/ActivityService'

const ActivityRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ActivityService()

  app.get('/activity', async (request, reply) => {
    const result = await controller.listActivity(app, request)
    return reply.send(result)
  })
  app.post('/activity', async (request, reply) => {
    const result = await controller.createActivity(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/activity/:id', async (request, reply) => {
    const result = await controller.getActivityById(app, request)
    return reply.send(result)
  })
  app.put('/activity/:id', async (request, reply) => {
    const result = await controller.updateActivity(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/activity/:id', async (request, reply) => {
    const result = await controller.deleteActivity(app, request)
    return reply.send(result)
  })
}

export default ActivityRoutes
