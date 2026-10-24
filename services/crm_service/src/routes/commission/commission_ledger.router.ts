import type { FastifyPluginAsync } from 'fastify'
import { CommissionLedgerService } from '../../services/commission/commission_ledger/CommissionLedgerService'

const CommissionLedgerRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CommissionLedgerService()

  app.get('/commission_ledger', async (request, reply) => {
    const result = await controller.listCommissionLedger(app, request)
    return reply.send(result)
  })
  app.post('/commission_ledger', async (request, reply) => {
    const result = await controller.createCommissionLedger(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/commission_ledger/:id', async (request, reply) => {
    const result = await controller.getCommissionLedgerById(app, request)
    return reply.send(result)
  })
  app.put('/commission_ledger/:id', async (request, reply) => {
    const result = await controller.updateCommissionLedger(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/commission_ledger/:id', async (request, reply) => {
    const result = await controller.deleteCommissionLedger(app, request)
    return reply.send(result)
  })
}

export default CommissionLedgerRoutes
