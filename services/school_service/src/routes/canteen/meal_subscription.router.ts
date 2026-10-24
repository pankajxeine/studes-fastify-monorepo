import type { FastifyPluginAsync } from 'fastify'
import { MealSubscriptionService } from '../../services/canteen/meal_subscription/MealSubscriptionService'

const MealSubscriptionRoutes: FastifyPluginAsync = async (app) => {
  const controller = new MealSubscriptionService()

  app.get('/meal_subscription', async (request, reply) => {
    const result = await controller.listMealSubscription(app, request)
    return reply.send(result)
  })
  app.post('/meal_subscription', async (request, reply) => {
    const result = await controller.createMealSubscription(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/meal_subscription/:id', async (request, reply) => {
    const result = await controller.getMealSubscriptionById(app, request)
    return reply.send(result)
  })
  app.put('/meal_subscription/:id', async (request, reply) => {
    const result = await controller.updateMealSubscription(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/meal_subscription/:id', async (request, reply) => {
    const result = await controller.deleteMealSubscription(app, request)
    return reply.send(result)
  })
}

export default MealSubscriptionRoutes
