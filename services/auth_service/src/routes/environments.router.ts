import type { FastifyPluginAsync } from 'fastify'
import { EnvironmentsService } from '../services/environments/EnvironmentsService'

const EnvironmentsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new EnvironmentsService()
  app.get('/environments', async (request, reply) => {
     return await reply.send(controller.listEnvironments(app, request))
  })
  app.post('/environments', async (request, reply) => {
     return await reply.send(controller.createEnvironment(app, request.body as any, request))
  })
  app.get('/environments/:id', async (request, reply) => {
     return await reply.send(controller.getEnvironmentsById(app, request))
  })
  app.put('/environments/:id', async (request, reply) => {
     return await reply.send(controller.updateEnvironment(app, request.body as any, request))
  })
  app.delete('/environments/:id', async (request, reply) => {
      await controller.deleteEnvironment(app, request) 

             reply.code(201) 
          
  })
}

export default EnvironmentsRoutes
