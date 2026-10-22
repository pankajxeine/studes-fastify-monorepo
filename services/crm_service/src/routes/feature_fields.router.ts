import type { FastifyPluginAsync } from 'fastify'
import { FeatureFieldsService } from '../services/cpanels/feature_fields/FeatureFieldsService'

const FeatureFieldsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new FeatureFieldsService()

  app.get('/feature_fields', async (request, reply) => {
    const result = await controller.listFeatureFields(app, request)
    return reply.send(result)
  })
  app.post('/feature_fields', async (request, reply) => {
    const result = await controller.createFeatureField(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/feature_fields/:id', async (request, reply) => {
    const result = await controller.getFeatureFieldsById(app, request)
    return reply.send(result)
  })
  app.put('/feature_fields/:id', async (request, reply) => {
    const result = await controller.updateFeatureField(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/feature_fields/:id', async (request, reply) => {
    const result = await controller.deleteFeatureField(app, request)
    return reply.send(result)
  })
}

export default FeatureFieldsRoutes
