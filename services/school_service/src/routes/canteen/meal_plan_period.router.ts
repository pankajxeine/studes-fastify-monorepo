import type { FastifyPluginAsync } from 'fastify'
import { MealPlanPeriodService } from '../../services/canteen/meal_plan_period/MealPlanPeriodService'

const MealPlanPeriodRoutes: FastifyPluginAsync = async (app) => {
  const controller = new MealPlanPeriodService()

  app.get('/meal_plan_period', async (request, reply) => {
    const result = await controller.listMealPlanPeriod(app, request)
    return reply.send(result)
  })
  app.post('/meal_plan_period', async (request, reply) => {
    const result = await controller.createMealPlanPeriod(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/meal_plan_period/:id', async (request, reply) => {
    const result = await controller.getMealPlanPeriodById(app, request)
    return reply.send(result)
  })
  app.put('/meal_plan_period/:id', async (request, reply) => {
    const result = await controller.updateMealPlanPeriod(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/meal_plan_period/:id', async (request, reply) => {
    const result = await controller.deleteMealPlanPeriod(app, request)
    return reply.send(result)
  })
}

export default MealPlanPeriodRoutes
