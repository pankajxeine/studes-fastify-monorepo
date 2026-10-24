import type { FastifyPluginAsync } from 'fastify'
import { CurrencyService } from '../../services/platform/currency/CurrencyService'

const CurrencyRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CurrencyService()

  app.get('/currency', async (request, reply) => {
    const result = await controller.listCurrency(app, request)
    return reply.send(result)
  })
  app.post('/currency', async (request, reply) => {
    const result = await controller.createCurrency(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/currency/:id', async (request, reply) => {
    const result = await controller.getCurrencyById(app, request)
    return reply.send(result)
  })
  app.put('/currency/:id', async (request, reply) => {
    const result = await controller.updateCurrency(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/currency/:id', async (request, reply) => {
    const result = await controller.deleteCurrency(app, request)
    return reply.send(result)
  })
}

export default CurrencyRoutes
