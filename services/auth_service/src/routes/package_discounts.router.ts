import type { FastifyPluginAsync } from 'fastify'
import { PackageDiscountsService } from '../services/cpanel/package_discounts/PackageDiscountsService'

const PackageDiscountsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PackageDiscountsService()

  app.get('/package_discounts', async (request, reply) => {
    const result = await controller.listPackageDiscounts(app, request)
    return reply.send(result)
  })
  app.post('/package_discounts', async (request, reply) => {
    const result = await controller.createPackageDiscount(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/package_discounts/:id', async (request, reply) => {
    const result = await controller.getPackageDiscountsById(app, request)
    return reply.send(result)
  })
  app.put('/package_discounts/:id', async (request, reply) => {
    const result = await controller.updatePackageDiscount(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/package_discounts/:id', async (request, reply) => {
    const result = await controller.deletePackageDiscount(app, request)
    return reply.send(result)
  })
}

export default PackageDiscountsRoutes
