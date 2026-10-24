import type { FastifyPluginAsync } from 'fastify'
import { WalletService } from '../../services/canteen/wallet/WalletService'

const WalletRoutes: FastifyPluginAsync = async (app) => {
  const controller = new WalletService()

  app.get('/wallet', async (request, reply) => {
    const result = await controller.listWallet(app, request)
    return reply.send(result)
  })
  app.post('/wallet', async (request, reply) => {
    const result = await controller.createWallet(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/wallet/:id', async (request, reply) => {
    const result = await controller.getWalletById(app, request)
    return reply.send(result)
  })
  app.put('/wallet/:id', async (request, reply) => {
    const result = await controller.updateWallet(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/wallet/:id', async (request, reply) => {
    const result = await controller.deleteWallet(app, request)
    return reply.send(result)
  })
}

export default WalletRoutes
