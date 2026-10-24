import type { FastifyPluginAsync } from 'fastify'
import { IndustryService } from '../../services/platform/industry/IndustryService'

const IndustryRoutes: FastifyPluginAsync = async (app) => {
  const controller = new IndustryService()

  app.get('/industry', async (request, reply) => {
    const result = await controller.listIndustry(app, request)
    return reply.send(result)
  })
  app.post('/industry', async (request, reply) => {
    const result = await controller.createIndustry(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/industry/:id', async (request, reply) => {
    const result = await controller.getIndustryById(app, request)
    return reply.send(result)
  })
  app.put('/industry/:id', async (request, reply) => {
    const result = await controller.updateIndustry(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/industry/:id', async (request, reply) => {
    const result = await controller.deleteIndustry(app, request)
    return reply.send(result)
  })
}

export default IndustryRoutes
