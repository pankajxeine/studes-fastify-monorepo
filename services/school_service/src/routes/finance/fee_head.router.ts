import type { FastifyPluginAsync } from 'fastify'
import { FeeHeadService } from '../../services/finance/fee_head/FeeHeadService'

const FeeHeadRoutes: FastifyPluginAsync = async (app) => {
  const controller = new FeeHeadService()

  app.get('/fee_head', async (request, reply) => {
    const result = await controller.listFeeHead(app, request)
    return reply.send(result)
  })
  app.post('/fee_head', async (request, reply) => {
    const result = await controller.createFeeHead(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/fee_head/:id', async (request, reply) => {
    const result = await controller.getFeeHeadById(app, request)
    return reply.send(result)
  })
  app.put('/fee_head/:id', async (request, reply) => {
    const result = await controller.updateFeeHead(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/fee_head/:id', async (request, reply) => {
    const result = await controller.deleteFeeHead(app, request)
    return reply.send(result)
  })
}

export default FeeHeadRoutes
