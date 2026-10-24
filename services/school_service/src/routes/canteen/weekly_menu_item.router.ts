import type { FastifyPluginAsync } from 'fastify'
import { WeeklyMenuItemService } from '../../services/canteen/weekly_menu_item/WeeklyMenuItemService'

const WeeklyMenuItemRoutes: FastifyPluginAsync = async (app) => {
  const controller = new WeeklyMenuItemService()

  app.get('/weekly_menu_item', async (request, reply) => {
    const result = await controller.listWeeklyMenuItem(app, request)
    return reply.send(result)
  })
  app.post('/weekly_menu_item', async (request, reply) => {
    const result = await controller.createWeeklyMenuItem(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/weekly_menu_item/:id', async (request, reply) => {
    const result = await controller.getWeeklyMenuItemById(app, request)
    return reply.send(result)
  })
  app.put('/weekly_menu_item/:id', async (request, reply) => {
    const result = await controller.updateWeeklyMenuItem(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/weekly_menu_item/:id', async (request, reply) => {
    const result = await controller.deleteWeeklyMenuItem(app, request)
    return reply.send(result)
  })
}

export default WeeklyMenuItemRoutes
