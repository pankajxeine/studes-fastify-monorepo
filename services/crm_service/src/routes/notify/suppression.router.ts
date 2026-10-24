import type { FastifyPluginAsync } from 'fastify'
import { SuppressionService } from '../../services/notify/suppression/SuppressionService'

const SuppressionRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SuppressionService()

  app.get('/suppression', async (request, reply) => {
    const result = await controller.listSuppression(app, request)
    return reply.send(result)
  })
  app.post('/suppression', async (request, reply) => {
    const result = await controller.createSuppression(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/suppression/:id', async (request, reply) => {
    const result = await controller.getSuppressionById(app, request)
    return reply.send(result)
  })
  app.put('/suppression/:id', async (request, reply) => {
    const result = await controller.updateSuppression(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/suppression/:id', async (request, reply) => {
    const result = await controller.deleteSuppression(app, request)
    return reply.send(result)
  })
}

export default SuppressionRoutes
