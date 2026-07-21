import type { FastifyPluginAsync } from 'fastify'
import { PackagesService } from '../services/cpanel/packages/PackagesService'

const PackagesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PackagesService()

  app.get('/packages', async (request, reply) => {

    return await reply.send(controller.listPackages(app, request))
  })
  app.post('/packages', async (request, reply) => {
    return await reply.send(controller.createPackage(app, request.body as any, request))
  })
  app.get('/packages/:id', async (request, reply) => {

    return await reply.send(controller.getPackagesById(app, request))
  })
  app.put('/packages/:id', async (request, reply) => {
    return await reply.send(controller.updatePackage(app, request.body as any, request))
  })
  app.delete('/packages/:id', async (request, reply) => {

    return await reply.send(controller.deletePackage(app, request))
  })
}

export default PackagesRoutes
