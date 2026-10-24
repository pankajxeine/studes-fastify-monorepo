import type { FastifyPluginAsync } from 'fastify'
import { LibraryMembershipService } from '../../services/library/library_membership/LibraryMembershipService'

const LibraryMembershipRoutes: FastifyPluginAsync = async (app) => {
  const controller = new LibraryMembershipService()

  app.get('/library_membership', async (request, reply) => {
    const result = await controller.listLibraryMembership(app, request)
    return reply.send(result)
  })
  app.post('/library_membership', async (request, reply) => {
    const result = await controller.createLibraryMembership(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/library_membership/:id', async (request, reply) => {
    const result = await controller.getLibraryMembershipById(app, request)
    return reply.send(result)
  })
  app.put('/library_membership/:id', async (request, reply) => {
    const result = await controller.updateLibraryMembership(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/library_membership/:id', async (request, reply) => {
    const result = await controller.deleteLibraryMembership(app, request)
    return reply.send(result)
  })
}

export default LibraryMembershipRoutes
