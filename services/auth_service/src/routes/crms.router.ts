import type { FastifyPluginAsync } from 'fastify'
import { CrmsService } from '../services/cpanels_router/crms/CrmsService'

const CrmsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CrmsService()
  app.get('/crms', async (request, reply) => {
     return await reply.send(controller.listCrms(app, request))
  })
  app.post('/crms', async (request, reply) => {
     return await reply.send(controller.createCrm(app, request.body as any, request))
  })
  app.get('/crms/:id', async (request, reply) => {
     return await reply.send(controller.getCrmsById(app, request))
  })
  app.put('/crms/:id', async (request, reply) => {
     return await reply.send(controller.updateCrm(app, request.body as any, request))
  })
  app.delete('/crms/:id', async (request, reply) => {
      await controller.deleteCrm(app, request) 

             reply.code(201) 
          
  })
}

export default CrmsRoutes
