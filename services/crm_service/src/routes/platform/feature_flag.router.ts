import type { FastifyPluginAsync } from 'fastify'
import { FeatureFlagService } from '../../services/platform/feature_flag/FeatureFlagService'

const FeatureFlagRoutes: FastifyPluginAsync = async (app) => {
  const controller = new FeatureFlagService()

  app.get('/feature_flag', async (request, reply) => {
    const result = await controller.listFeatureFlag(app, request)
    return reply.send(result)
  })
  app.post('/feature_flag', async (request, reply) => {
    const result = await controller.createFeatureFlag(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/feature_flag/:id', async (request, reply) => {
    const result = await controller.getFeatureFlagById(app, request)
    return reply.send(result)
  })
  app.put('/feature_flag/:id', async (request, reply) => {
    const result = await controller.updateFeatureFlag(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/feature_flag/:id', async (request, reply) => {
    const result = await controller.deleteFeatureFlag(app, request)
    return reply.send(result)
  })
}

export default FeatureFlagRoutes
