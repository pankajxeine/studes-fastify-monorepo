import type { FastifyPluginAsync } from 'fastify'
import { ReconciliationBatchService } from '../../services/payment/reconciliation_batch/ReconciliationBatchService'

const ReconciliationBatchRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ReconciliationBatchService()

  app.get('/reconciliation_batch', { config: {"adminPermission":"payment.reconciliation_batch.read"} }, async (request, reply) => {
    const result = await controller.listReconciliationBatch(app, request)
    return reply.send(result)
  })
  app.post('/reconciliation_batch', { config: {"adminPermission":"payment.reconciliation_batch.create"} }, async (request, reply) => {
    const result = await controller.createReconciliationBatch(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/reconciliation_batch/:reconciliation_batch_id', { config: {"adminPermission":"payment.reconciliation_batch.read"} }, async (request, reply) => {
    const result = await controller.getReconciliationBatchById(app, request)
    return reply.send(result)
  })
  app.put('/reconciliation_batch/:reconciliation_batch_id', { config: {"adminPermission":"payment.reconciliation_batch.update"} }, async (request, reply) => {
    const result = await controller.updateReconciliationBatch(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/reconciliation_batch/:reconciliation_batch_id', { config: {"adminPermission":"payment.reconciliation_batch.delete"} }, async (request, reply) => {
    const result = await controller.deleteReconciliationBatch(app, request)
    return reply.send(result)
  })
}

export default ReconciliationBatchRoutes
