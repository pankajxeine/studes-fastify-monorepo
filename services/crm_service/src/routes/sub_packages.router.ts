import type { FastifyPluginAsync } from 'fastify'
import { SubPackagesService } from '../services/cpanels/sub_packages/SubPackagesService'

const SubPackagesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SubPackagesService()

  app.get('/sub_packages', async (request, reply) => {
    const result = await controller.listSubPackages(app, request)
    return reply.send(result)
  })
  app.post('/sub_packages', async (request, reply) => {
    const result = await controller.createSubPackage(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/sub_packages/:id', async (request, reply) => {
    const result = await controller.getSubPackagesById(app, request)
    return reply.send(result)
  })
  app.put('/sub_packages/:id', async (request, reply) => {
    const result = await controller.updateSubPackage(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/sub_packages/:id', async (request, reply) => {
    const result = await controller.deleteSubPackage(app, request)
    return reply.send(result)
  })
}

export default SubPackagesRoutes
