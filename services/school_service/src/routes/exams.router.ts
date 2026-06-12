import type { FastifyPluginAsync } from 'fastify'
import { ExamsService } from '../services/ExamsService'

const ExamsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ExamsService()
  app.get('/exams', async (request, reply) => {
    return await controller.listExams(app, request)
  })
  app.post('/exams', async (request, reply) => {
    return await controller.createExam(app, request.body as any, request)
  })
  app.post('/exams/:id/results', async (request, reply) => {
    return await controller.recordExamResult(app, request.body as any, request)
  })
}

export default ExamsRoutes
