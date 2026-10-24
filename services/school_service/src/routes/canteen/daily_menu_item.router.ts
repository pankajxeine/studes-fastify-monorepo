import type { FastifyPluginAsync } from 'fastify'
import { DailyMenuItemService } from '../../services/canteen/daily_menu_item/DailyMenuItemService'

const DailyMenuItemRoutes: FastifyPluginAsync = async (app) => {
  const controller = new DailyMenuItemService()

  app.get('/daily_menu_item', async (request, reply) => {
    const result = await controller.listDailyMenuItem(app, request)
    return reply.send(result)
  })
  app.post('/daily_menu_item', async (request, reply) => {
    const result = await controller.createDailyMenuItem(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/daily_menu_item/:id', async (request, reply) => {
    const result = await controller.getDailyMenuItemById(app, request)
    return reply.send(result)
  })
  app.put('/daily_menu_item/:id', async (request, reply) => {
    const result = await controller.updateDailyMenuItem(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/daily_menu_item/:id', async (request, reply) => {
    const result = await controller.deleteDailyMenuItem(app, request)
    return reply.send(result)
  })
}

export default DailyMenuItemRoutes
