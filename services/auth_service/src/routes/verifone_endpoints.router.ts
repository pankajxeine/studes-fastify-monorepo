import type { FastifyPluginAsync } from 'fastify'
import { VerifoneEndpointsService } from '../services/cpanel/verifone_endpoints/VerifoneEndpointsService'

const VerifoneEndpointsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new VerifoneEndpointsService()

  app.get('/verifone_endpoints', async (request, reply) => {
    const result = await controller.listVerifoneEndpoints(app, request)
    return reply.send(result)
  })
  app.post('/verifone_endpoints', async (request, reply) => {
    const result = await controller.createVerifoneEndpoint(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/verifone_endpoints/:id', async (request, reply) => {
    const result = await controller.getVerifoneEndpointsById(app, request)
    return reply.send(result)
  })
  app.put('/verifone_endpoints/:id', async (request, reply) => {
    const result = await controller.updateVerifoneEndpoint(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/verifone_endpoints/:id', async (request, reply) => {
    const result = await controller.deleteVerifoneEndpoint(app, request)
    return reply.send(result)
  })
}

export default VerifoneEndpointsRoutes
