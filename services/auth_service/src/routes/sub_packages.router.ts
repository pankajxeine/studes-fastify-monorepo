import type { FastifyPluginAsync } from 'fastify'
import { SubPackagesService } from '../services/sub_packages/SubPackagesService'

const SubPackagesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SubPackagesService()
  app.get('/sub_packages', async (request, reply) => {
     return await reply.send(controller.listSubPackages(app, request))
  })
  app.post('/sub_packages', async (request, reply) => {
     return await reply.send(controller.createSubPackage(app, request.body as any, request))
  })
  app.get('/sub_packages/:id', async (request, reply) => {
     return await reply.send(controller.getSubPackagesById(app, request))
  })
  app.put('/sub_packages/:id', async (request, reply) => {
     return await reply.send(controller.updateSubPackage(app, request.body as any, request))
  })
  app.delete('/sub_packages/:id', async (request, reply) => {
      await controller.deleteSubPackage(app, request) 

             reply.code(201) 
          
  })
}

export default SubPackagesRoutes
