import type { FastifyPluginAsync } from 'fastify'
import { GuardianService } from '../../services/people/guardian/GuardianService'

const GuardianRoutes: FastifyPluginAsync = async (app) => {
  const controller = new GuardianService()

  app.get('/guardian', async (request, reply) => {
    const result = await controller.listGuardian(app, request)
    return reply.send(result)
  })
  app.post('/guardian', async (request, reply) => {
    const result = await controller.createGuardian(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/guardian/:id', async (request, reply) => {
    const result = await controller.getGuardianById(app, request)
    return reply.send(result)
  })
  app.put('/guardian/:id', async (request, reply) => {
    const result = await controller.updateGuardian(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/guardian/:id', async (request, reply) => {
    const result = await controller.deleteGuardian(app, request)
    return reply.send(result)
  })
}

export default GuardianRoutes
