import type { FastifyPluginAsync } from 'fastify'
import { MerchantAccountService } from '../../services/payment/merchant_account/MerchantAccountService'

const MerchantAccountRoutes: FastifyPluginAsync = async (app) => {
  const controller = new MerchantAccountService()

  app.get('/merchant_account', async (request, reply) => {
    const result = await controller.listMerchantAccount(app, request)
    return reply.send(result)
  })
  app.post('/merchant_account', async (request, reply) => {
    const result = await controller.createMerchantAccount(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/merchant_account/:id', async (request, reply) => {
    const result = await controller.getMerchantAccountById(app, request)
    return reply.send(result)
  })
  app.put('/merchant_account/:id', async (request, reply) => {
    const result = await controller.updateMerchantAccount(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/merchant_account/:id', async (request, reply) => {
    const result = await controller.deleteMerchantAccount(app, request)
    return reply.send(result)
  })
}

export default MerchantAccountRoutes
