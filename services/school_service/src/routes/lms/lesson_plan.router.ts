import type { FastifyPluginAsync } from 'fastify'
import { LessonPlanService } from '../../services/lms/lesson_plan/LessonPlanService'

const LessonPlanRoutes: FastifyPluginAsync = async (app) => {
  const controller = new LessonPlanService()

  app.get('/lesson_plan', async (request, reply) => {
    const result = await controller.listLessonPlan(app, request)
    return reply.send(result)
  })
  app.post('/lesson_plan', async (request, reply) => {
    const result = await controller.createLessonPlan(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/lesson_plan/:id', async (request, reply) => {
    const result = await controller.getLessonPlanById(app, request)
    return reply.send(result)
  })
  app.put('/lesson_plan/:id', async (request, reply) => {
    const result = await controller.updateLessonPlan(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/lesson_plan/:id', async (request, reply) => {
    const result = await controller.deleteLessonPlan(app, request)
    return reply.send(result)
  })
}

export default LessonPlanRoutes
