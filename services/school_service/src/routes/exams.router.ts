import type { FastifyPluginAsync } from 'fastify'
import { ExamsService } from '../services/exams/ExamsService'

const ExamsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ExamsService()

  app.get('/exams', async (request, reply) => {
    const result = await controller.listExams(app, request)
    return reply.send(result)
  })
  app.post('/exams', async (request, reply) => {
    const result = await controller.createExam(app, request.body as any, request)
    return reply.send(result)
  })
  app.post('/exams/:id/results', async (request, reply) => {
    const result = await controller.recordExamResult(app, request.body as any, request)
    return reply.send(result)
  })
}

export default ExamsRoutes
