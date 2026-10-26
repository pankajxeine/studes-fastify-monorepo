import type { FastifyPluginAsync } from 'fastify'
import { ReconciliationItemService } from '../../services/payment/reconciliation_item/ReconciliationItemService'

const ReconciliationItemRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ReconciliationItemService()

  app.get('/reconciliation_item', { config: {"adminPermission":"payment.reconciliation_item.read"} }, async (request, reply) => {
    const result = await controller.listReconciliationItem(app, request)
    return reply.send(result)
  })
  app.post('/reconciliation_item', { config: {"adminPermission":"payment.reconciliation_item.create"} }, async (request, reply) => {
    const result = await controller.createReconciliationItem(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/reconciliation_item/:reconciliation_item_id', { config: {"adminPermission":"payment.reconciliation_item.read"} }, async (request, reply) => {
    const result = await controller.getReconciliationItemById(app, request)
    return reply.send(result)
  })
  app.put('/reconciliation_item/:reconciliation_item_id', { config: {"adminPermission":"payment.reconciliation_item.update"} }, async (request, reply) => {
    const result = await controller.updateReconciliationItem(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/reconciliation_item/:reconciliation_item_id', { config: {"adminPermission":"payment.reconciliation_item.delete"} }, async (request, reply) => {
    const result = await controller.deleteReconciliationItem(app, request)
    return reply.send(result)
  })
}

export default ReconciliationItemRoutes
