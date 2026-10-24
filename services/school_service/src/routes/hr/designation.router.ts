import type { FastifyPluginAsync } from 'fastify'
import { DesignationService } from '../../services/hr/designation/DesignationService'

const DesignationRoutes: FastifyPluginAsync = async (app) => {
  const controller = new DesignationService()

  app.get('/designation', async (request, reply) => {
    const result = await controller.listDesignation(app, request)
    return reply.send(result)
  })
  app.post('/designation', async (request, reply) => {
    const result = await controller.createDesignation(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/designation/:id', async (request, reply) => {
    const result = await controller.getDesignationById(app, request)
    return reply.send(result)
  })
  app.put('/designation/:id', async (request, reply) => {
    const result = await controller.updateDesignation(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/designation/:id', async (request, reply) => {
    const result = await controller.deleteDesignation(app, request)
    return reply.send(result)
  })
}

export default DesignationRoutes
