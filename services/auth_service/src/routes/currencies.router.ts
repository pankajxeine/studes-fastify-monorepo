import type { FastifyPluginAsync } from 'fastify'
import { CurrenciesService } from '../services/cpanel/currencies/CurrenciesService'

const CurrenciesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CurrenciesService()

  app.get('/currencies', async (request, reply) => {
    const result = await controller.listCurrencies(app, request)
    return reply.send(result)
  })
  app.post('/currencies', async (request, reply) => {
    const result = await controller.createCurrencie(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/currencies/:id', async (request, reply) => {
    const result = await controller.getCurrenciesById(app, request)
    return reply.send(result)
  })
  app.put('/currencies/:id', async (request, reply) => {
    const result = await controller.updateCurrencie(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/currencies/:id', async (request, reply) => {
    const result = await controller.deleteCurrencie(app, request)
    return reply.send(result)
  })
}

export default CurrenciesRoutes
