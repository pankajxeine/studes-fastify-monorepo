import type { FastifyPluginAsync } from 'fastify'
import { SkeletonDetailsService } from '../services/cpanel_router/skeleton_details/SkeletonDetailsService'

const SkeletonDetailsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SkeletonDetailsService()

  app.get('/skeleton_details', async (request, reply) => {
    const result = await controller.listSkeletonDetails(app, request)
    return reply.send(result)
  })
  app.post('/skeleton_details', async (request, reply) => {
    const result = await controller.createSkeletonDetail(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/skeleton_details/:id', async (request, reply) => {
    const result = await controller.getSkeletonDetailsById(app, request)
    return reply.send(result)
  })
  app.put('/skeleton_details/:id', async (request, reply) => {
    const result = await controller.updateSkeletonDetail(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/skeleton_details/:id', async (request, reply) => {
    const result = await controller.deleteSkeletonDetail(app, request)
    return reply.send(result)
  })
}

export default SkeletonDetailsRoutes
