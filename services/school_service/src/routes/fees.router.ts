import type { FastifyPluginAsync } from 'fastify'
import { FeesService } from '../services/fees/FeesService'

const FeesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new FeesService()

  app.get('/fees/structures', async (request, reply) => {
    const result = await controller.listFeeStructures(app, request)
    return reply.send(result)
  })
  app.post('/fees/structures', async (request, reply) => {
    const result = await controller.createFeeStructure(app, request.body as any, request)
    return reply.send(result)
  })
  app.post('/fees/assignments', async (request, reply) => {
    const result = await controller.assignFeeToStudent(app, request.body as any, request)
    return reply.send(result)
  })
  app.post('/fees/payments', async (request, reply) => {
    const result = await controller.recordFeePayment(app, request.body as any, request)
    return reply.send(result)
  })
}

export default FeesRoutes
