import type { FastifyPluginAsync } from 'fastify'
import { IndustriesService } from '../services/industries/IndustriesService'

const IndustriesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new IndustriesService()
  app.get('/industries', async (request, reply) => {
     return await reply.send(controller.listIndustries(app, request))
  })
  app.post('/industries', async (request, reply) => {
     return await reply.send(controller.createIndustrie(app, request.body as any, request))
  })
  app.get('/industries/:id', async (request, reply) => {
     return await reply.send(controller.getIndustriesById(app, request))
  })
  app.put('/industries/:id', async (request, reply) => {
     return await reply.send(controller.updateIndustrie(app, request.body as any, request))
  })
  app.delete('/industries/:id', async (request, reply) => {
      await controller.deleteIndustrie(app, request) 

             reply.code(201) 
          
  })
}

export default IndustriesRoutes
