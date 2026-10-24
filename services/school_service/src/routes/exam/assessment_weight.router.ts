import type { FastifyPluginAsync } from 'fastify'
import { AssessmentWeightService } from '../../services/exam/assessment_weight/AssessmentWeightService'

const AssessmentWeightRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AssessmentWeightService()

  app.get('/assessment_weight', async (request, reply) => {
    const result = await controller.listAssessmentWeight(app, request)
    return reply.send(result)
  })
  app.post('/assessment_weight', async (request, reply) => {
    const result = await controller.createAssessmentWeight(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/assessment_weight/:id', async (request, reply) => {
    const result = await controller.getAssessmentWeightById(app, request)
    return reply.send(result)
  })
  app.put('/assessment_weight/:id', async (request, reply) => {
    const result = await controller.updateAssessmentWeight(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/assessment_weight/:id', async (request, reply) => {
    const result = await controller.deleteAssessmentWeight(app, request)
    return reply.send(result)
  })
}

export default AssessmentWeightRoutes
