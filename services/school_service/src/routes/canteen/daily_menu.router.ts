import type { FastifyPluginAsync } from 'fastify'
import { DailyMenuService } from '../../services/canteen/daily_menu/DailyMenuService'

const DailyMenuRoutes: FastifyPluginAsync = async (app) => {
  const controller = new DailyMenuService()

  app.get('/daily_menu', async (request, reply) => {
    const result = await controller.listDailyMenu(app, request)
    return reply.send(result)
  })
  app.post('/daily_menu', async (request, reply) => {
    const result = await controller.createDailyMenu(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/daily_menu/:id', async (request, reply) => {
    const result = await controller.getDailyMenuById(app, request)
    return reply.send(result)
  })
  app.put('/daily_menu/:id', async (request, reply) => {
    const result = await controller.updateDailyMenu(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/daily_menu/:id', async (request, reply) => {
    const result = await controller.deleteDailyMenu(app, request)
    return reply.send(result)
  })
}

export default DailyMenuRoutes
