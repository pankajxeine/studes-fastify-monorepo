import type { FastifyPluginAsync } from 'fastify'
import { CountriesService } from '../services/cpanel/countries/CountriesService'

const CountriesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CountriesService()

  app.get('/countries', async (request, reply) => {
    const result = await controller.listCountries(app, request)
    return reply.send(result)
  })
  app.post('/countries', async (request, reply) => {
    const result = await controller.createCountrie(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/countries/:id', async (request, reply) => {
    const result = await controller.getCountriesById(app, request)
    return reply.send(result)
  })
  app.put('/countries/:id', async (request, reply) => {
    const result = await controller.updateCountrie(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/countries/:id', async (request, reply) => {
    const result = await controller.deleteCountrie(app, request)
    return reply.send(result)
  })
}

export default CountriesRoutes
