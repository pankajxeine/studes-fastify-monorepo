import type { FastifyPluginAsync } from 'fastify'
import { PriceBookService } from '../../services/commerce/price_book/PriceBookService'

const PriceBookRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PriceBookService()

  app.get('/price_book', { config: {"adminPermission":"commerce.price_book.read"} }, async (request, reply) => {
    const result = await controller.listPriceBook(app, request)
    return reply.send(result)
  })
  app.post('/price_book', { config: {"adminPermission":"commerce.price_book.create"} }, async (request, reply) => {
    const result = await controller.createPriceBook(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/price_book/:price_book_id', { config: {"adminPermission":"commerce.price_book.read"} }, async (request, reply) => {
    const result = await controller.getPriceBookById(app, request)
    return reply.send(result)
  })
  app.put('/price_book/:price_book_id', { config: {"adminPermission":"commerce.price_book.update"} }, async (request, reply) => {
    const result = await controller.updatePriceBook(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/price_book/:price_book_id', { config: {"adminPermission":"commerce.price_book.delete"} }, async (request, reply) => {
    const result = await controller.deletePriceBook(app, request)
    return reply.send(result)
  })
}

export default PriceBookRoutes
