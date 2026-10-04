import type { FastifyPluginAsync } from 'fastify'
import { IndustriesService } from '../services/cpanel/industries/IndustriesService'

const IndustriesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new IndustriesService()

  app.get('/industries', async (request, reply) => {
    const result = await controller.listIndustries(app, request)
    return reply.send(result)
  })
  app.post('/industries', async (request, reply) => {
    const result = await controller.createIndustrie(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/industries/:id', async (request, reply) => {
    const result = await controller.getIndustriesById(app, request)
    return reply.send(result)
  })
  app.put('/industries/:id', async (request, reply) => {
    const result = await controller.updateIndustrie(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/industries/:id', async (request, reply) => {
    const result = await controller.deleteIndustrie(app, request)
    return reply.send(result)
  })
}

export default IndustriesRoutes
