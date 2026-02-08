import type { FastifyPluginAsync } from 'fastify'
import { LibraryService } from '../services/LibraryService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const LibraryRoutes: FastifyPluginAsync = async (app) => {
  const controller = new LibraryService()
  app.get('/library/books', async (request, reply) => {
    return await controller.listLibraryBooks(buildHeaders(request))
  })
  app.post('/library/books', async (request, reply) => {
    return await controller.createLibraryBook(request.body as any, buildHeaders(request))
  })
  app.post('/library/loans', async (request, reply) => {
    return await controller.createLibraryLoan(request.body as any, buildHeaders(request))
  })
  app.post('/library/returns', async (request, reply) => {
    return await controller.returnLibraryBook(request.body as any, buildHeaders(request))
  })
}

export default LibraryRoutes
