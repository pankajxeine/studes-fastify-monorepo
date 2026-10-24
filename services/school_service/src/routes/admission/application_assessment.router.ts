import type { FastifyPluginAsync } from 'fastify'
import { ApplicationAssessmentService } from '../../services/admission/application_assessment/ApplicationAssessmentService'

const ApplicationAssessmentRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ApplicationAssessmentService()

  app.get('/application_assessment', async (request, reply) => {
    const result = await controller.listApplicationAssessment(app, request)
    return reply.send(result)
  })
  app.post('/application_assessment', async (request, reply) => {
    const result = await controller.createApplicationAssessment(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/application_assessment/:id', async (request, reply) => {
    const result = await controller.getApplicationAssessmentById(app, request)
    return reply.send(result)
  })
  app.put('/application_assessment/:id', async (request, reply) => {
    const result = await controller.updateApplicationAssessment(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/application_assessment/:id', async (request, reply) => {
    const result = await controller.deleteApplicationAssessment(app, request)
    return reply.send(result)
  })
}

export default ApplicationAssessmentRoutes
