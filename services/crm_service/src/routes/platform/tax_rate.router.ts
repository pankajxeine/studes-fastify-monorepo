import type { FastifyPluginAsync } from 'fastify'
import { TaxRateService } from '../../services/platform/tax_rate/TaxRateService'

const TaxRateRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TaxRateService()

  app.get('/tax_rate', { config: {"adminPermission":"platform.tax_rate.read"} }, async (request, reply) => {
    const result = await controller.listTaxRate(app, request)
    return reply.send(result)
  })
  app.post('/tax_rate', { config: {"adminPermission":"platform.tax_rate.create"} }, async (request, reply) => {
    const result = await controller.createTaxRate(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/tax_rate/:tax_rate_id', { config: {"adminPermission":"platform.tax_rate.read"} }, async (request, reply) => {
    const result = await controller.getTaxRateById(app, request)
    return reply.send(result)
  })
  app.put('/tax_rate/:tax_rate_id', { config: {"adminPermission":"platform.tax_rate.update"} }, async (request, reply) => {
    const result = await controller.updateTaxRate(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/tax_rate/:tax_rate_id', { config: {"adminPermission":"platform.tax_rate.delete"} }, async (request, reply) => {
    const result = await controller.deleteTaxRate(app, request)
    return reply.send(result)
  })
}

export default TaxRateRoutes
