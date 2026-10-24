import type { FastifyPluginAsync } from 'fastify'
import { AcceptanceModeService } from '../../services/payment/acceptance_mode/AcceptanceModeService'

const AcceptanceModeRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AcceptanceModeService()

  app.get('/acceptance_mode', async (request, reply) => {
    const result = await controller.listAcceptanceMode(app, request)
    return reply.send(result)
  })
  app.post('/acceptance_mode', async (request, reply) => {
    const result = await controller.createAcceptanceMode(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/acceptance_mode/:id', async (request, reply) => {
    const result = await controller.getAcceptanceModeById(app, request)
    return reply.send(result)
  })
  app.put('/acceptance_mode/:id', async (request, reply) => {
    const result = await controller.updateAcceptanceMode(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/acceptance_mode/:id', async (request, reply) => {
    const result = await controller.deleteAcceptanceMode(app, request)
    return reply.send(result)
  })
}

export default AcceptanceModeRoutes
