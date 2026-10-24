import type { FastifyPluginAsync } from 'fastify'
import { PurchaseOrderService } from '../../services/inventory/purchase_order/PurchaseOrderService'

const PurchaseOrderRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PurchaseOrderService()

  app.get('/purchase_order', async (request, reply) => {
    const result = await controller.listPurchaseOrder(app, request)
    return reply.send(result)
  })
  app.post('/purchase_order', async (request, reply) => {
    const result = await controller.createPurchaseOrder(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/purchase_order/:id', async (request, reply) => {
    const result = await controller.getPurchaseOrderById(app, request)
    return reply.send(result)
  })
  app.put('/purchase_order/:id', async (request, reply) => {
    const result = await controller.updatePurchaseOrder(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/purchase_order/:id', async (request, reply) => {
    const result = await controller.deletePurchaseOrder(app, request)
    return reply.send(result)
  })
}

export default PurchaseOrderRoutes
