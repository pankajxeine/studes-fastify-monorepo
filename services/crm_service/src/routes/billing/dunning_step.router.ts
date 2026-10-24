import type { FastifyPluginAsync } from 'fastify'
import { DunningStepService } from '../../services/billing/dunning_step/DunningStepService'

const DunningStepRoutes: FastifyPluginAsync = async (app) => {
  const controller = new DunningStepService()

  app.get('/dunning_step', async (request, reply) => {
    const result = await controller.listDunningStep(app, request)
    return reply.send(result)
  })
  app.post('/dunning_step', async (request, reply) => {
    const result = await controller.createDunningStep(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/dunning_step/:id', async (request, reply) => {
    const result = await controller.getDunningStepById(app, request)
    return reply.send(result)
  })
  app.put('/dunning_step/:id', async (request, reply) => {
    const result = await controller.updateDunningStep(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/dunning_step/:id', async (request, reply) => {
    const result = await controller.deleteDunningStep(app, request)
    return reply.send(result)
  })
}

export default DunningStepRoutes
