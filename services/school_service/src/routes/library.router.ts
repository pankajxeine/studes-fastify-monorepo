import type { FastifyPluginAsync } from 'fastify'
import { LibraryService } from '../services/library/LibraryService'

const LibraryRoutes: FastifyPluginAsync = async (app) => {
  const controller = new LibraryService()

  app.get('/library/books', async (request, reply) => {
    const result = await controller.listLibraryBooks(app, request)
    return reply.send(result)
  })
  app.post('/library/books', async (request, reply) => {
    const result = await controller.createLibraryBook(app, request.body as any, request)
    return reply.send(result)
  })
  app.post('/library/loans', async (request, reply) => {
    const result = await controller.createLibraryLoan(app, request.body as any, request)
    return reply.send(result)
  })
  app.post('/library/returns', async (request, reply) => {
    const result = await controller.returnLibraryBook(app, request.body as any, request)
    return reply.send(result)
  })
}

export default LibraryRoutes
