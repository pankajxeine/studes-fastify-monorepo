import type { FastifyPluginAsync } from 'fastify'
import { DunningPolicyService } from '../../services/billing/dunning_policy/DunningPolicyService'

const DunningPolicyRoutes: FastifyPluginAsync = async (app) => {
  const controller = new DunningPolicyService()

  app.get('/dunning_policy', async (request, reply) => {
    const result = await controller.listDunningPolicy(app, request)
    return reply.send(result)
  })
  app.post('/dunning_policy', async (request, reply) => {
    const result = await controller.createDunningPolicy(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/dunning_policy/:id', async (request, reply) => {
    const result = await controller.getDunningPolicyById(app, request)
    return reply.send(result)
  })
  app.put('/dunning_policy/:id', async (request, reply) => {
    const result = await controller.updateDunningPolicy(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/dunning_policy/:id', async (request, reply) => {
    const result = await controller.deleteDunningPolicy(app, request)
    return reply.send(result)
  })
}

export default DunningPolicyRoutes
