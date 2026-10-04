import type { FastifyPluginAsync } from 'fastify'
import { SubStoreDetailsService } from '../services/cpanel/sub_store_details/SubStoreDetailsService'

const SubStoreDetailsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SubStoreDetailsService()

  app.get('/sub_store_details', async (request, reply) => {
    const result = await controller.listSubStoreDetails(app, request)
    return reply.send(result)
  })
  app.post('/sub_store_details', async (request, reply) => {
    const result = await controller.createSubStoreDetail(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/sub_store_details/:id', async (request, reply) => {
    const result = await controller.getSubStoreDetailsById(app, request)
    return reply.send(result)
  })
  app.put('/sub_store_details/:id', async (request, reply) => {
    const result = await controller.updateSubStoreDetail(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/sub_store_details/:id', async (request, reply) => {
    const result = await controller.deleteSubStoreDetail(app, request)
    return reply.send(result)
  })
}

export default SubStoreDetailsRoutes
