import type { FastifyPluginAsync } from 'fastify'
import { FeeStructureItemService } from '../../services/finance/fee_structure_item/FeeStructureItemService'

const FeeStructureItemRoutes: FastifyPluginAsync = async (app) => {
  const controller = new FeeStructureItemService()

  app.get('/fee_structure_item', async (request, reply) => {
    const result = await controller.listFeeStructureItem(app, request)
    return reply.send(result)
  })
  app.post('/fee_structure_item', async (request, reply) => {
    const result = await controller.createFeeStructureItem(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/fee_structure_item/:id', async (request, reply) => {
    const result = await controller.getFeeStructureItemById(app, request)
    return reply.send(result)
  })
  app.put('/fee_structure_item/:id', async (request, reply) => {
    const result = await controller.updateFeeStructureItem(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/fee_structure_item/:id', async (request, reply) => {
    const result = await controller.deleteFeeStructureItem(app, request)
    return reply.send(result)
  })
}

export default FeeStructureItemRoutes
