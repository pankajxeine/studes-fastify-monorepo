import type { FastifyPluginAsync } from 'fastify'
import { DunningRunService } from '../../services/billing/dunning_run/DunningRunService'

const DunningRunRoutes: FastifyPluginAsync = async (app) => {
  const controller = new DunningRunService()

  app.get('/dunning_run', async (request, reply) => {
    const result = await controller.listDunningRun(app, request)
    return reply.send(result)
  })
  app.post('/dunning_run', async (request, reply) => {
    const result = await controller.createDunningRun(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/dunning_run/:id', async (request, reply) => {
    const result = await controller.getDunningRunById(app, request)
    return reply.send(result)
  })
  app.put('/dunning_run/:id', async (request, reply) => {
    const result = await controller.updateDunningRun(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/dunning_run/:id', async (request, reply) => {
    const result = await controller.deleteDunningRun(app, request)
    return reply.send(result)
  })
}

export default DunningRunRoutes
