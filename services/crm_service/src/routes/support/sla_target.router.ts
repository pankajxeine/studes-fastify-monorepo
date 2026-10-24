import type { FastifyPluginAsync } from 'fastify'
import { SlaTargetService } from '../../services/support/sla_target/SlaTargetService'

const SlaTargetRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SlaTargetService()

  app.get('/sla_target', async (request, reply) => {
    const result = await controller.listSlaTarget(app, request)
    return reply.send(result)
  })
  app.post('/sla_target', async (request, reply) => {
    const result = await controller.createSlaTarget(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/sla_target/:id', async (request, reply) => {
    const result = await controller.getSlaTargetById(app, request)
    return reply.send(result)
  })
  app.put('/sla_target/:id', async (request, reply) => {
    const result = await controller.updateSlaTarget(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/sla_target/:id', async (request, reply) => {
    const result = await controller.deleteSlaTarget(app, request)
    return reply.send(result)
  })
}

export default SlaTargetRoutes
