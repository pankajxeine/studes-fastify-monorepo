import type { FastifyPluginAsync } from 'fastify'
import { VendorService } from '../../services/org/vendor/VendorService'

const VendorRoutes: FastifyPluginAsync = async (app) => {
  const controller = new VendorService()

  app.get('/vendor', async (request, reply) => {
    const result = await controller.listVendor(app, request)
    return reply.send(result)
  })
  app.post('/vendor', async (request, reply) => {
    const result = await controller.createVendor(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/vendor/:id', async (request, reply) => {
    const result = await controller.getVendorById(app, request)
    return reply.send(result)
  })
  app.put('/vendor/:id', async (request, reply) => {
    const result = await controller.updateVendor(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/vendor/:id', async (request, reply) => {
    const result = await controller.deleteVendor(app, request)
    return reply.send(result)
  })
}

export default VendorRoutes
