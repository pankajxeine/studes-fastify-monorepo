import type { FastifyPluginAsync } from 'fastify'
import { FeatureFieldsService } from '../services/feature_fields/FeatureFieldsService'

const FeatureFieldsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new FeatureFieldsService()
  app.get('/feature_fields', async (request, reply) => {
     return await reply.send(controller.listFeatureFields(app, request))
  })
  app.post('/feature_fields', async (request, reply) => {
     return await reply.send(controller.createFeatureField(app, request.body as any, request))
  })
  app.get('/feature_fields/:id', async (request, reply) => {
     return await reply.send(controller.getFeatureFieldsById(app, request))
  })
  app.put('/feature_fields/:id', async (request, reply) => {
     return await reply.send(controller.updateFeatureField(app, request.body as any, request))
  })
  app.delete('/feature_fields/:id', async (request, reply) => {
      await controller.deleteFeatureField(app, request) 

             reply.code(201) 
          
  })
}

export default FeatureFieldsRoutes
