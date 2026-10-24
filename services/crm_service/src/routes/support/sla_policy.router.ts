import type { FastifyPluginAsync } from 'fastify'
import { SlaPolicyService } from '../../services/support/sla_policy/SlaPolicyService'

const SlaPolicyRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SlaPolicyService()

  app.get('/sla_policy', async (request, reply) => {
    const result = await controller.listSlaPolicy(app, request)
    return reply.send(result)
  })
  app.post('/sla_policy', async (request, reply) => {
    const result = await controller.createSlaPolicy(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/sla_policy/:id', async (request, reply) => {
    const result = await controller.getSlaPolicyById(app, request)
    return reply.send(result)
  })
  app.put('/sla_policy/:id', async (request, reply) => {
    const result = await controller.updateSlaPolicy(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/sla_policy/:id', async (request, reply) => {
    const result = await controller.deleteSlaPolicy(app, request)
    return reply.send(result)
  })
}

export default SlaPolicyRoutes
