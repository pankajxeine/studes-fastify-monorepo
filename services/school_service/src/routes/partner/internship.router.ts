import type { FastifyPluginAsync } from 'fastify'
import { InternshipService } from '../../services/partner/internship/InternshipService'

const InternshipRoutes: FastifyPluginAsync = async (app) => {
  const controller = new InternshipService()

  app.get('/internship', async (request, reply) => {
    const result = await controller.listInternship(app, request)
    return reply.send(result)
  })
  app.post('/internship', async (request, reply) => {
    const result = await controller.createInternship(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/internship/:id', async (request, reply) => {
    const result = await controller.getInternshipById(app, request)
    return reply.send(result)
  })
  app.put('/internship/:id', async (request, reply) => {
    const result = await controller.updateInternship(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/internship/:id', async (request, reply) => {
    const result = await controller.deleteInternship(app, request)
    return reply.send(result)
  })
}

export default InternshipRoutes
