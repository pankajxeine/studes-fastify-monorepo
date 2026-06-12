import type { FastifyPluginAsync } from 'fastify'
import { LibraryService } from '../services/LibraryService'

const LibraryRoutes: FastifyPluginAsync = async (app) => {
  const controller = new LibraryService()
  app.get('/library/books', async (request, reply) => {
    return await controller.listLibraryBooks(app, request)
  })
  app.post('/library/books', async (request, reply) => {
    return await controller.createLibraryBook(app, request.body as any, request)
  })
  app.post('/library/loans', async (request, reply) => {
    return await controller.createLibraryLoan(app, request.body as any, request)
  })
  app.post('/library/returns', async (request, reply) => {
    return await controller.returnLibraryBook(app, request.body as any, request)
  })
}

export default LibraryRoutes
