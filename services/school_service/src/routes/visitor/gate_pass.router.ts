import type { FastifyPluginAsync } from 'fastify'
import { GatePassService } from '../../services/visitor/gate_pass/GatePassService'

const GatePassRoutes: FastifyPluginAsync = async (app) => {
  const controller = new GatePassService()

  app.get('/gate_pass', async (request, reply) => {
    const result = await controller.listGatePass(app, request)
    return reply.send(result)
  })
  app.post('/gate_pass', async (request, reply) => {
    const result = await controller.createGatePass(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/gate_pass/:id', async (request, reply) => {
    const result = await controller.getGatePassById(app, request)
    return reply.send(result)
  })
  app.put('/gate_pass/:id', async (request, reply) => {
    const result = await controller.updateGatePass(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/gate_pass/:id', async (request, reply) => {
    const result = await controller.deleteGatePass(app, request)
    return reply.send(result)
  })
}

export default GatePassRoutes
