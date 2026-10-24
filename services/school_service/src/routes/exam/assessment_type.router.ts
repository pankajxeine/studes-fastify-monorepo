import type { FastifyPluginAsync } from 'fastify'
import { AssessmentTypeService } from '../../services/exam/assessment_type/AssessmentTypeService'

const AssessmentTypeRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AssessmentTypeService()

  app.get('/assessment_type', async (request, reply) => {
    const result = await controller.listAssessmentType(app, request)
    return reply.send(result)
  })
  app.post('/assessment_type', async (request, reply) => {
    const result = await controller.createAssessmentType(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/assessment_type/:id', async (request, reply) => {
    const result = await controller.getAssessmentTypeById(app, request)
    return reply.send(result)
  })
  app.put('/assessment_type/:id', async (request, reply) => {
    const result = await controller.updateAssessmentType(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/assessment_type/:id', async (request, reply) => {
    const result = await controller.deleteAssessmentType(app, request)
    return reply.send(result)
  })
}

export default AssessmentTypeRoutes
