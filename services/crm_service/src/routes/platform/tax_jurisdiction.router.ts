import type { FastifyPluginAsync } from 'fastify'
import { TaxJurisdictionService } from '../../services/platform/tax_jurisdiction/TaxJurisdictionService'

const TaxJurisdictionRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TaxJurisdictionService()

  app.get('/tax_jurisdiction', async (request, reply) => {
    const result = await controller.listTaxJurisdiction(app, request)
    return reply.send(result)
  })
  app.post('/tax_jurisdiction', async (request, reply) => {
    const result = await controller.createTaxJurisdiction(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/tax_jurisdiction/:id', async (request, reply) => {
    const result = await controller.getTaxJurisdictionById(app, request)
    return reply.send(result)
  })
  app.put('/tax_jurisdiction/:id', async (request, reply) => {
    const result = await controller.updateTaxJurisdiction(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/tax_jurisdiction/:id', async (request, reply) => {
    const result = await controller.deleteTaxJurisdiction(app, request)
    return reply.send(result)
  })
}

export default TaxJurisdictionRoutes
