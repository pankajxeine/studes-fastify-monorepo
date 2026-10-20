import type { FastifyPluginAsync } from 'fastify'
import { HardwaresService } from '../services/cpanels/hardwares/HardwaresService'

const HardwaresRoutes: FastifyPluginAsync = async (app) => {
  const controller = new HardwaresService()

  app.get('/hardwares', async (request, reply) => {
    const result = await controller.listHardwares(app, request)
    return reply.send(result)
  })
  app.post('/hardwares', async (request, reply) => {
    const result = await controller.createHardware(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/hardwares/:id', async (request, reply) => {
    const result = await controller.getHardwaresById(app, request)
    return reply.send(result)
  })
  app.put('/hardwares/:id', async (request, reply) => {
    const result = await controller.updateHardware(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/hardwares/:id', async (request, reply) => {
    const result = await controller.deleteHardware(app, request)
    return reply.send(result)
  })
}

export default HardwaresRoutes
