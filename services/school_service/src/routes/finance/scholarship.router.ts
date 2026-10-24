import type { FastifyPluginAsync } from 'fastify'
import { ScholarshipService } from '../../services/finance/scholarship/ScholarshipService'

const ScholarshipRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ScholarshipService()

  app.get('/scholarship', async (request, reply) => {
    const result = await controller.listScholarship(app, request)
    return reply.send(result)
  })
  app.post('/scholarship', async (request, reply) => {
    const result = await controller.createScholarship(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/scholarship/:id', async (request, reply) => {
    const result = await controller.getScholarshipById(app, request)
    return reply.send(result)
  })
  app.put('/scholarship/:id', async (request, reply) => {
    const result = await controller.updateScholarship(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/scholarship/:id', async (request, reply) => {
    const result = await controller.deleteScholarship(app, request)
    return reply.send(result)
  })
}

export default ScholarshipRoutes
