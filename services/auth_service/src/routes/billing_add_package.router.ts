import type { FastifyPluginAsync } from 'fastify'
import { BillingAddPackageService } from '../services/cpanels/billing_add_package/BillingAddPackageService'

const BillingAddPackageRoutes: FastifyPluginAsync = async (app) => {
  const controller = new BillingAddPackageService()

  app.get('/billing_add_package', async (request, reply) => {
    const result = await controller.listBillingAddPackage(app, request)
    return reply.send(result)
  })
  app.post('/billing_add_package', async (request, reply) => {
    const result = await controller.createBillingAddPackage(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/billing_add_package/:id', async (request, reply) => {
    const result = await controller.getBillingAddPackageById(app, request)
    return reply.send(result)
  })
  app.put('/billing_add_package/:id', async (request, reply) => {
    const result = await controller.updateBillingAddPackage(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/billing_add_package/:id', async (request, reply) => {
    const result = await controller.deleteBillingAddPackage(app, request)
    return reply.send(result)
  })
}

export default BillingAddPackageRoutes
