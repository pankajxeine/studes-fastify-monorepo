import type { FastifyPluginAsync } from 'fastify'
import { FeatureFlagService } from '../../services/platform/feature_flag/FeatureFlagService'

const FeatureFlagRoutes: FastifyPluginAsync = async (app) => {
  const controller = new FeatureFlagService()

  app.get('/feature_flag', { config: {"adminPermission":"platform.feature_flag.read"} }, async (request, reply) => {
    const result = await controller.listFeatureFlag(app, request)
    return reply.send(result)
  })
  app.post('/feature_flag', { config: {"adminPermission":"platform.feature_flag.create"} }, async (request, reply) => {
    const result = await controller.createFeatureFlag(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/feature_flag/:feature_flag_id', { config: {"adminPermission":"platform.feature_flag.read"} }, async (request, reply) => {
    const result = await controller.getFeatureFlagById(app, request)
    return reply.send(result)
  })
  app.put('/feature_flag/:feature_flag_id', { config: {"adminPermission":"platform.feature_flag.update"} }, async (request, reply) => {
    const result = await controller.updateFeatureFlag(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/feature_flag/:feature_flag_id', { config: {"adminPermission":"platform.feature_flag.delete"} }, async (request, reply) => {
    const result = await controller.deleteFeatureFlag(app, request)
    return reply.send(result)
  })
}

export default FeatureFlagRoutes
