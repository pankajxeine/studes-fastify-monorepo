import type { FastifyPluginAsync } from 'fastify'
import { FeeStructureService } from '../../services/finance/fee_structure/FeeStructureService'

const FeeStructureRoutes: FastifyPluginAsync = async (app) => {
  const controller = new FeeStructureService()

  app.get('/fee_structure', async (request, reply) => {
    const result = await controller.listFeeStructure(app, request)
    return reply.send(result)
  })
  app.post('/fee_structure', async (request, reply) => {
    const result = await controller.createFeeStructure(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/fee_structure/:id', async (request, reply) => {
    const result = await controller.getFeeStructureById(app, request)
    return reply.send(result)
  })
  app.put('/fee_structure/:id', async (request, reply) => {
    const result = await controller.updateFeeStructure(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/fee_structure/:id', async (request, reply) => {
    const result = await controller.deleteFeeStructure(app, request)
    return reply.send(result)
  })
}

export default FeeStructureRoutes
