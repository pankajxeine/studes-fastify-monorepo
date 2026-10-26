import type { FastifyPluginAsync } from 'fastify'
import { FeatureService } from '../../services/catalog/feature/FeatureService'

const FeatureRoutes: FastifyPluginAsync = async (app) => {
  const controller = new FeatureService()

  app.get('/feature', { config: {"adminPermission":"catalog.feature.read"} }, async (request, reply) => {
    const result = await controller.listFeature(app, request)
    return reply.send(result)
  })
  app.post('/feature', { config: {"adminPermission":"catalog.feature.create"} }, async (request, reply) => {
    const result = await controller.createFeature(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/feature/:feature_id', { config: {"adminPermission":"catalog.feature.read"} }, async (request, reply) => {
    const result = await controller.getFeatureById(app, request)
    return reply.send(result)
  })
  app.put('/feature/:feature_id', { config: {"adminPermission":"catalog.feature.update"} }, async (request, reply) => {
    const result = await controller.updateFeature(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/feature/:feature_id', { config: {"adminPermission":"catalog.feature.delete"} }, async (request, reply) => {
    const result = await controller.deleteFeature(app, request)
    return reply.send(result)
  })
}

export default FeatureRoutes
