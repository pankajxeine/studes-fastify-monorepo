import type { FastifyPluginAsync } from 'fastify'
import { CountryService } from '../../services/platform/country/CountryService'

const CountryRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CountryService()

  app.get('/country', { config: {"adminPermission":"platform.country.read"} }, async (request, reply) => {
    const result = await controller.listCountry(app, request)
    return reply.send(result)
  })
  app.post('/country', { config: {"adminPermission":"platform.country.create"} }, async (request, reply) => {
    const result = await controller.createCountry(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/country/:country_id', { config: {"adminPermission":"platform.country.read"} }, async (request, reply) => {
    const result = await controller.getCountryById(app, request)
    return reply.send(result)
  })
  app.put('/country/:country_id', { config: {"adminPermission":"platform.country.update"} }, async (request, reply) => {
    const result = await controller.updateCountry(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/country/:country_id', { config: {"adminPermission":"platform.country.delete"} }, async (request, reply) => {
    const result = await controller.deleteCountry(app, request)
    return reply.send(result)
  })
}

export default CountryRoutes
