import type { FastifyPluginAsync } from 'fastify'
import { SkeletonDetailsService } from '../services/cpanel_router/skeleton_details/SkeletonDetailsService'

const SkeletonDetailsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SkeletonDetailsService()

  app.get('/skeleton_details', async (request, reply) => {

    return await reply.send(controller.listSkeletonDetails(app, request))
  })
  app.post('/skeleton_details', async (request, reply) => {
    return await reply.send(controller.createSkeletonDetail(app, request.body as any, request))
  })
  app.get('/skeleton_details/:id', async (request, reply) => {

    return await reply.send(controller.getSkeletonDetailsById(app, request))
  })
  app.put('/skeleton_details/:id', async (request, reply) => {
    return await reply.send(controller.updateSkeletonDetail(app, request.body as any, request))
  })
  app.delete('/skeleton_details/:id', async (request, reply) => {

    return await reply.send(controller.deleteSkeletonDetail(app, request))
  })
}

export default SkeletonDetailsRoutes
