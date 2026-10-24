import type { FastifyPluginAsync } from 'fastify'
import { PtmSlotService } from '../../services/events/ptm_slot/PtmSlotService'

const PtmSlotRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PtmSlotService()

  app.get('/ptm_slot', async (request, reply) => {
    const result = await controller.listPtmSlot(app, request)
    return reply.send(result)
  })
  app.post('/ptm_slot', async (request, reply) => {
    const result = await controller.createPtmSlot(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/ptm_slot/:id', async (request, reply) => {
    const result = await controller.getPtmSlotById(app, request)
    return reply.send(result)
  })
  app.put('/ptm_slot/:id', async (request, reply) => {
    const result = await controller.updatePtmSlot(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/ptm_slot/:id', async (request, reply) => {
    const result = await controller.deletePtmSlot(app, request)
    return reply.send(result)
  })
}

export default PtmSlotRoutes
