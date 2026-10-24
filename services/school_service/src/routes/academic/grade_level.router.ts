import type { FastifyPluginAsync } from 'fastify'
import { GradeLevelService } from '../../services/academic/grade_level/GradeLevelService'

const GradeLevelRoutes: FastifyPluginAsync = async (app) => {
  const controller = new GradeLevelService()

  app.get('/grade_level', async (request, reply) => {
    const result = await controller.listGradeLevel(app, request)
    return reply.send(result)
  })
  app.post('/grade_level', async (request, reply) => {
    const result = await controller.createGradeLevel(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/grade_level/:id', async (request, reply) => {
    const result = await controller.getGradeLevelById(app, request)
    return reply.send(result)
  })
  app.put('/grade_level/:id', async (request, reply) => {
    const result = await controller.updateGradeLevel(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/grade_level/:id', async (request, reply) => {
    const result = await controller.deleteGradeLevel(app, request)
    return reply.send(result)
  })
}

export default GradeLevelRoutes
