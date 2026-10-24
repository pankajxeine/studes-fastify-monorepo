import type { FastifyPluginAsync } from 'fastify'
import { BookCategoryService } from '../../services/library/book_category/BookCategoryService'

const BookCategoryRoutes: FastifyPluginAsync = async (app) => {
  const controller = new BookCategoryService()

  app.get('/book_category', async (request, reply) => {
    const result = await controller.listBookCategory(app, request)
    return reply.send(result)
  })
  app.post('/book_category', async (request, reply) => {
    const result = await controller.createBookCategory(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/book_category/:id', async (request, reply) => {
    const result = await controller.getBookCategoryById(app, request)
    return reply.send(result)
  })
  app.put('/book_category/:id', async (request, reply) => {
    const result = await controller.updateBookCategory(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/book_category/:id', async (request, reply) => {
    const result = await controller.deleteBookCategory(app, request)
    return reply.send(result)
  })
}

export default BookCategoryRoutes
