import type { FastifyPluginAsync } from 'fastify'
import { WalletTransactionService } from '../../services/canteen/wallet_transaction/WalletTransactionService'

const WalletTransactionRoutes: FastifyPluginAsync = async (app) => {
  const controller = new WalletTransactionService()

  app.get('/wallet_transaction', async (request, reply) => {
    const result = await controller.listWalletTransaction(app, request)
    return reply.send(result)
  })
  app.post('/wallet_transaction', async (request, reply) => {
    const result = await controller.createWalletTransaction(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/wallet_transaction/:id', async (request, reply) => {
    const result = await controller.getWalletTransactionById(app, request)
    return reply.send(result)
  })
  app.put('/wallet_transaction/:id', async (request, reply) => {
    const result = await controller.updateWalletTransaction(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/wallet_transaction/:id', async (request, reply) => {
    const result = await controller.deleteWalletTransaction(app, request)
    return reply.send(result)
  })
}

export default WalletTransactionRoutes
