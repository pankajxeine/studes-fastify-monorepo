import type { FastifyPluginAsync } from 'fastify'
import { DunningStepService } from '../../services/billing/dunning_step/DunningStepService'

const DunningStepRoutes: FastifyPluginAsync = async (app) => {
  const controller = new DunningStepService()

  app.get('/dunning_step', { config: {"adminPermission":"billing.dunning_step.read"} }, async (request, reply) => {
    const result = await controller.listDunningStep(app, request)
    return reply.send(result)
  })
  app.post('/dunning_step', { config: {"adminPermission":"billing.dunning_step.create"} }, async (request, reply) => {
    const result = await controller.createDunningStep(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/dunning_step/:dunning_step_id', { config: {"adminPermission":"billing.dunning_step.read"} }, async (request, reply) => {
    const result = await controller.getDunningStepById(app, request)
    return reply.send(result)
  })
  app.put('/dunning_step/:dunning_step_id', { config: {"adminPermission":"billing.dunning_step.update"} }, async (request, reply) => {
    const result = await controller.updateDunningStep(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/dunning_step/:dunning_step_id', { config: {"adminPermission":"billing.dunning_step.delete"} }, async (request, reply) => {
    const result = await controller.deleteDunningStep(app, request)
    return reply.send(result)
  })
}

export default DunningStepRoutes
