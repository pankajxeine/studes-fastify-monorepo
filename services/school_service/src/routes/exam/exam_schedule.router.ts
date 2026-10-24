import type { FastifyPluginAsync } from 'fastify'
import { ExamScheduleService } from '../../services/exam/exam_schedule/ExamScheduleService'

const ExamScheduleRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ExamScheduleService()

  app.get('/exam_schedule', async (request, reply) => {
    const result = await controller.listExamSchedule(app, request)
    return reply.send(result)
  })
  app.post('/exam_schedule', async (request, reply) => {
    const result = await controller.createExamSchedule(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/exam_schedule/:id', async (request, reply) => {
    const result = await controller.getExamScheduleById(app, request)
    return reply.send(result)
  })
  app.put('/exam_schedule/:id', async (request, reply) => {
    const result = await controller.updateExamSchedule(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/exam_schedule/:id', async (request, reply) => {
    const result = await controller.deleteExamSchedule(app, request)
    return reply.send(result)
  })
}

export default ExamScheduleRoutes
