import type { FastifyPluginAsync } from 'fastify'
import { OutletService } from '../../services/payment/outlet/OutletService'

const OutletRoutes: FastifyPluginAsync = async (app) => {
  const controller = new OutletService()

  app.get('/outlet', { config: {"adminPermission":"payment.outlet.read"} }, async (request, reply) => {
    const result = await controller.listOutlet(app, request)
    return reply.send(result)
  })
  app.post('/outlet', { config: {"adminPermission":"payment.outlet.create"} }, async (request, reply) => {
    const result = await controller.createOutlet(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/outlet/:outlet_id', { config: {"adminPermission":"payment.outlet.read"} }, async (request, reply) => {
    const result = await controller.getOutletById(app, request)
    return reply.send(result)
  })
  app.put('/outlet/:outlet_id', { config: {"adminPermission":"payment.outlet.update"} }, async (request, reply) => {
    const result = await controller.updateOutlet(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/outlet/:outlet_id', { config: {"adminPermission":"payment.outlet.delete"} }, async (request, reply) => {
    const result = await controller.deleteOutlet(app, request)
    return reply.send(result)
  })
}

export default OutletRoutes
