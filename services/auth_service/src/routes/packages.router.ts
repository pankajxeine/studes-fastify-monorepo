import type { FastifyPluginAsync } from 'fastify'
import { PackagesService } from '../services/cpanels/packages/PackagesService'

const PackagesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PackagesService()

  app.get('/packages', async (request, reply) => {
    const result = await controller.listPackages(app, request)
    return reply.send(result)
  })
  app.post('/packages', async (request, reply) => {
    const result = await controller.createPackage(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/packages/:id', async (request, reply) => {
    const result = await controller.getPackagesById(app, request)
    return reply.send(result)
  })
  app.put('/packages/:id', async (request, reply) => {
    const result = await controller.updatePackage(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/packages/:id', async (request, reply) => {
    const result = await controller.deletePackage(app, request)
    return reply.send(result)
  })
}

export default PackagesRoutes
