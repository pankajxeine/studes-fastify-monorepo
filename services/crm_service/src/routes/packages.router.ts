import type { FastifyPluginAsync } from 'fastify'
import { PackagesService } from '../services/PackagesService'

const PackagesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PackagesService()
  app.get('/packages', async (request, reply) => {
    return await controller.listPackages(app, request)
  })
  app.post('/packages', async (request, reply) => {
    return await controller.createPackage(app, request.body as any, request)
  })
  app.get('/packages/:packageId', async (request, reply) => {
    return await controller.getPackage(app, request)
  })
  app.patch('/packages/:packageId', async (request, reply) => {
    return await controller.updatePackage(app, request.body as any, request)
  })
  app.delete('/packages/:packageId', async (request, reply) => {
    await controller.deletePackage(app, request)
  })
}

export default PackagesRoutes
