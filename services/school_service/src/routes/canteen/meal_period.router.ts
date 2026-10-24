import type { FastifyPluginAsync } from 'fastify'
import { MealPeriodService } from '../../services/canteen/meal_period/MealPeriodService'

const MealPeriodRoutes: FastifyPluginAsync = async (app) => {
  const controller = new MealPeriodService()

  app.get('/meal_period', async (request, reply) => {
    const result = await controller.listMealPeriod(app, request)
    return reply.send(result)
  })
  app.post('/meal_period', async (request, reply) => {
    const result = await controller.createMealPeriod(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/meal_period/:id', async (request, reply) => {
    const result = await controller.getMealPeriodById(app, request)
    return reply.send(result)
  })
  app.put('/meal_period/:id', async (request, reply) => {
    const result = await controller.updateMealPeriod(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/meal_period/:id', async (request, reply) => {
    const result = await controller.deleteMealPeriod(app, request)
    return reply.send(result)
  })
}

export default MealPeriodRoutes
