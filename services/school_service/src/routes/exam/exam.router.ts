import type { FastifyPluginAsync } from 'fastify'
import { ExamService } from '../../services/exam/exam/ExamService'

const ExamRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ExamService()

  app.get('/exam', async (request, reply) => {
    const result = await controller.listExam(app, request)
    return reply.send(result)
  })
  app.post('/exam', async (request, reply) => {
    const result = await controller.createExam(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/exam/:id', async (request, reply) => {
    const result = await controller.getExamById(app, request)
    return reply.send(result)
  })
  app.put('/exam/:id', async (request, reply) => {
    const result = await controller.updateExam(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/exam/:id', async (request, reply) => {
    const result = await controller.deleteExam(app, request)
    return reply.send(result)
  })
}

export default ExamRoutes
