import type { FastifyPluginAsync } from 'fastify'
import { StockTransactionService } from '../../services/inventory/stock_transaction/StockTransactionService'

const StockTransactionRoutes: FastifyPluginAsync = async (app) => {
  const controller = new StockTransactionService()

  app.get('/stock_transaction', async (request, reply) => {
    const result = await controller.listStockTransaction(app, request)
    return reply.send(result)
  })
  app.post('/stock_transaction', async (request, reply) => {
    const result = await controller.createStockTransaction(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/stock_transaction/:id', async (request, reply) => {
    const result = await controller.getStockTransactionById(app, request)
    return reply.send(result)
  })
  app.put('/stock_transaction/:id', async (request, reply) => {
    const result = await controller.updateStockTransaction(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/stock_transaction/:id', async (request, reply) => {
    const result = await controller.deleteStockTransaction(app, request)
    return reply.send(result)
  })
}

export default StockTransactionRoutes
