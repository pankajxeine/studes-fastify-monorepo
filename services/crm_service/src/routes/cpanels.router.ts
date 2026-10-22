import type { FastifyPluginAsync } from 'fastify'
import { CpanelsService } from '../services/cpanel_router/cpanels/CpanelsService'

const CpanelsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CpanelsService()

  app.get('/cpanels', async (request, reply) => {
    const result = await controller.listCpanels(app, request)
    return reply.send(result)
  })
  app.post('/cpanels', async (request, reply) => {
    const result = await controller.createCpanel(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/cpanels/:id', async (request, reply) => {
    const result = await controller.getCpanelsById(app, request)
    return reply.send(result)
  })
  app.put('/cpanels/:id', async (request, reply) => {
    const result = await controller.updateCpanel(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/cpanels/:id', async (request, reply) => {
    const result = await controller.deleteCpanel(app, request)
    return reply.send(result)
  })
}

export default CpanelsRoutes
