import type { FastifyPluginAsync } from 'fastify'
import { MealPlanService } from '../../services/canteen/meal_plan/MealPlanService'

const MealPlanRoutes: FastifyPluginAsync = async (app) => {
  const controller = new MealPlanService()

  app.get('/meal_plan', async (request, reply) => {
    const result = await controller.listMealPlan(app, request)
    return reply.send(result)
  })
  app.post('/meal_plan', async (request, reply) => {
    const result = await controller.createMealPlan(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/meal_plan/:id', async (request, reply) => {
    const result = await controller.getMealPlanById(app, request)
    return reply.send(result)
  })
  app.put('/meal_plan/:id', async (request, reply) => {
    const result = await controller.updateMealPlan(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/meal_plan/:id', async (request, reply) => {
    const result = await controller.deleteMealPlan(app, request)
    return reply.send(result)
  })
}

export default MealPlanRoutes
