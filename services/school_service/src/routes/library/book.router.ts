import type { FastifyPluginAsync } from 'fastify'
import { BookService } from '../../services/library/book/BookService'

const BookRoutes: FastifyPluginAsync = async (app) => {
  const controller = new BookService()

  app.get('/book', async (request, reply) => {
    const result = await controller.listBook(app, request)
    return reply.send(result)
  })
  app.post('/book', async (request, reply) => {
    const result = await controller.createBook(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/book/:id', async (request, reply) => {
    const result = await controller.getBookById(app, request)
    return reply.send(result)
  })
  app.put('/book/:id', async (request, reply) => {
    const result = await controller.updateBook(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/book/:id', async (request, reply) => {
    const result = await controller.deleteBook(app, request)
    return reply.send(result)
  })
}

export default BookRoutes
