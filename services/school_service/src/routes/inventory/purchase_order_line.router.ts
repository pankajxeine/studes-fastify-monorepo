import type { FastifyPluginAsync } from 'fastify'
import { PurchaseOrderLineService } from '../../services/inventory/purchase_order_line/PurchaseOrderLineService'

const PurchaseOrderLineRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PurchaseOrderLineService()

  app.get('/purchase_order_line', async (request, reply) => {
    const result = await controller.listPurchaseOrderLine(app, request)
    return reply.send(result)
  })
  app.post('/purchase_order_line', async (request, reply) => {
    const result = await controller.createPurchaseOrderLine(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/purchase_order_line/:id', async (request, reply) => {
    const result = await controller.getPurchaseOrderLineById(app, request)
    return reply.send(result)
  })
  app.put('/purchase_order_line/:id', async (request, reply) => {
    const result = await controller.updatePurchaseOrderLine(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/purchase_order_line/:id', async (request, reply) => {
    const result = await controller.deletePurchaseOrderLine(app, request)
    return reply.send(result)
  })
}

export default PurchaseOrderLineRoutes
