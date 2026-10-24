import type { FastifyPluginAsync } from 'fastify'
import { LookupValueService } from '../../services/platform/lookup_value/LookupValueService'

const LookupValueRoutes: FastifyPluginAsync = async (app) => {
  const controller = new LookupValueService()

  app.get('/lookup_value', async (request, reply) => {
    const result = await controller.listLookupValue(app, request)
    return reply.send(result)
  })
  app.post('/lookup_value', async (request, reply) => {
    const result = await controller.createLookupValue(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/lookup_value/:id', async (request, reply) => {
    const result = await controller.getLookupValueById(app, request)
    return reply.send(result)
  })
  app.put('/lookup_value/:id', async (request, reply) => {
    const result = await controller.updateLookupValue(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/lookup_value/:id', async (request, reply) => {
    const result = await controller.deleteLookupValue(app, request)
    return reply.send(result)
  })
}

export default LookupValueRoutes
