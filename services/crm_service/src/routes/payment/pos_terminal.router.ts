import type { FastifyPluginAsync } from 'fastify'
import { PosTerminalService } from '../../services/payment/pos_terminal/PosTerminalService'

const PosTerminalRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PosTerminalService()

  app.get('/pos_terminal', async (request, reply) => {
    const result = await controller.listPosTerminal(app, request)
    return reply.send(result)
  })
  app.post('/pos_terminal', async (request, reply) => {
    const result = await controller.createPosTerminal(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/pos_terminal/:id', async (request, reply) => {
    const result = await controller.getPosTerminalById(app, request)
    return reply.send(result)
  })
  app.put('/pos_terminal/:id', async (request, reply) => {
    const result = await controller.updatePosTerminal(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/pos_terminal/:id', async (request, reply) => {
    const result = await controller.deletePosTerminal(app, request)
    return reply.send(result)
  })
}

export default PosTerminalRoutes
