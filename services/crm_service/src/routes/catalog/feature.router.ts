import type { FastifyPluginAsync } from 'fastify'
import { FeatureService } from '../../services/catalog/feature/FeatureService'

const FeatureRoutes: FastifyPluginAsync = async (app) => {
  const controller = new FeatureService()

  app.get('/feature', async (request, reply) => {
    const result = await controller.listFeature(app, request)
    return reply.send(result)
  })
  app.post('/feature', async (request, reply) => {
    const result = await controller.createFeature(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/feature/:id', async (request, reply) => {
    const result = await controller.getFeatureById(app, request)
    return reply.send(result)
  })
  app.put('/feature/:id', async (request, reply) => {
    const result = await controller.updateFeature(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/feature/:id', async (request, reply) => {
    const result = await controller.deleteFeature(app, request)
    return reply.send(result)
  })
}

export default FeatureRoutes
