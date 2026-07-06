import type { FastifyPluginAsync } from 'fastify'
import { CpanelsService } from '../services/cpanel_router/cpanels/CpanelsService'

const CpanelsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CpanelsService()

  app.get('/cpanels', async (request, reply) => {
    
    return await reply.send(controller.listCpanels(app, request))
  })
  app.post('/cpanels', async (request, reply) => {
    return await reply.send(controller.createCpanel(app, request.body as any, request))
  })
  app.get('/cpanels/:id', async (request, reply) => {
    
    return await reply.send(controller.getCpanelsById(app, request))
  })
  app.put('/cpanels/:id', async (request, reply) => {
    return await reply.send(controller.updateCpanel(app, request.body as any, request))
  })
  app.delete('/cpanels/:id', async (request, reply) => {
    
    return await reply.send(controller.deleteCpanel(app, request))
  })
}

export default CpanelsRoutes
