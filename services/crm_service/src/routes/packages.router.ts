import type { FastifyPluginAsync } from 'fastify'
import { PackagesService } from '../services/packages/PackagesService'

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
  app.get('/packages/:packageId', async (request, reply) => {
    const result = await controller.getPackage(app, request)
    return reply.send(result)
  })
  app.patch('/packages/:packageId', async (request, reply) => {
    const result = await controller.updatePackage(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/packages/:packageId', async (request, reply) => {
    const result = await controller.deletePackage(app, request)
    return reply.send(result)
  })
}

export default PackagesRoutes
