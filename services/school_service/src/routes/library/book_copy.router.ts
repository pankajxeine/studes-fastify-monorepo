import type { FastifyPluginAsync } from 'fastify'
import { BookCopyService } from '../../services/library/book_copy/BookCopyService'

const BookCopyRoutes: FastifyPluginAsync = async (app) => {
  const controller = new BookCopyService()

  app.get('/book_copy', async (request, reply) => {
    const result = await controller.listBookCopy(app, request)
    return reply.send(result)
  })
  app.post('/book_copy', async (request, reply) => {
    const result = await controller.createBookCopy(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/book_copy/:id', async (request, reply) => {
    const result = await controller.getBookCopyById(app, request)
    return reply.send(result)
  })
  app.put('/book_copy/:id', async (request, reply) => {
    const result = await controller.updateBookCopy(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/book_copy/:id', async (request, reply) => {
    const result = await controller.deleteBookCopy(app, request)
    return reply.send(result)
  })
}

export default BookCopyRoutes
