import type { FastifyPluginAsync } from 'fastify'
import { FeesService } from '../services/FeesService'

const FeesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new FeesService()
  app.get('/fees/structures', async (request, reply) => {
    return await controller.listFeeStructures(app, request)
  })
  app.post('/fees/structures', async (request, reply) => {
    return await controller.createFeeStructure(app, request.body as any, request)
  })
  app.post('/fees/assignments', async (request, reply) => {
    return await controller.assignFeeToStudent(app, request.body as any, request)
  })
  app.post('/fees/payments', async (request, reply) => {
    return await controller.recordFeePayment(app, request.body as any, request)
  })
}

export default FeesRoutes
