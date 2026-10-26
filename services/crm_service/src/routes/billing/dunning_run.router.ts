import type { FastifyPluginAsync } from 'fastify'
import { DunningRunService } from '../../services/billing/dunning_run/DunningRunService'

const DunningRunRoutes: FastifyPluginAsync = async (app) => {
  const controller = new DunningRunService()

  app.get('/dunning_run', { config: {"adminPermission":"billing.dunning_run.read"} }, async (request, reply) => {
    const result = await controller.listDunningRun(app, request)
    return reply.send(result)
  })
  app.post('/dunning_run', { config: {"adminPermission":"billing.dunning_run.create"} }, async (request, reply) => {
    const result = await controller.createDunningRun(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/dunning_run/:dunning_run_id', { config: {"adminPermission":"billing.dunning_run.read"} }, async (request, reply) => {
    const result = await controller.getDunningRunById(app, request)
    return reply.send(result)
  })
  app.put('/dunning_run/:dunning_run_id', { config: {"adminPermission":"billing.dunning_run.update"} }, async (request, reply) => {
    const result = await controller.updateDunningRun(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/dunning_run/:dunning_run_id', { config: {"adminPermission":"billing.dunning_run.delete"} }, async (request, reply) => {
    const result = await controller.deleteDunningRun(app, request)
    return reply.send(result)
  })
}

export default DunningRunRoutes
