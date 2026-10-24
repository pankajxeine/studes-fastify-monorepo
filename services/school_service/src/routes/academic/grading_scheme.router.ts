import type { FastifyPluginAsync } from 'fastify'
import { GradingSchemeService } from '../../services/academic/grading_scheme/GradingSchemeService'

const GradingSchemeRoutes: FastifyPluginAsync = async (app) => {
  const controller = new GradingSchemeService()

  app.get('/grading_scheme', async (request, reply) => {
    const result = await controller.listGradingScheme(app, request)
    return reply.send(result)
  })
  app.post('/grading_scheme', async (request, reply) => {
    const result = await controller.createGradingScheme(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/grading_scheme/:id', async (request, reply) => {
    const result = await controller.getGradingSchemeById(app, request)
    return reply.send(result)
  })
  app.put('/grading_scheme/:id', async (request, reply) => {
    const result = await controller.updateGradingScheme(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/grading_scheme/:id', async (request, reply) => {
    const result = await controller.deleteGradingScheme(app, request)
    return reply.send(result)
  })
}

export default GradingSchemeRoutes
