import type { FastifyPluginAsync } from 'fastify'
import { BillingCancelPackageService } from '../services/cpanels/billing_cancel_package/BillingCancelPackageService'

const BillingCancelPackageRoutes: FastifyPluginAsync = async (app) => {
  const controller = new BillingCancelPackageService()

  app.get('/billing_cancel_package', async (request, reply) => {
    const result = await controller.listBillingCancelPackage(app, request)
    return reply.send(result)
  })
  app.post('/billing_cancel_package', async (request, reply) => {
    const result = await controller.createBillingCancelPackage(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/billing_cancel_package/:id', async (request, reply) => {
    const result = await controller.getBillingCancelPackageById(app, request)
    return reply.send(result)
  })
  app.put('/billing_cancel_package/:id', async (request, reply) => {
    const result = await controller.updateBillingCancelPackage(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/billing_cancel_package/:id', async (request, reply) => {
    const result = await controller.deleteBillingCancelPackage(app, request)
    return reply.send(result)
  })
}

export default BillingCancelPackageRoutes
