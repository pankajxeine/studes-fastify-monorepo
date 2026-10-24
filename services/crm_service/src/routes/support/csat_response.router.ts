import type { FastifyPluginAsync } from 'fastify'
import { CsatResponseService } from '../../services/support/csat_response/CsatResponseService'

const CsatResponseRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CsatResponseService()

  app.get('/csat_response', async (request, reply) => {
    const result = await controller.listCsatResponse(app, request)
    return reply.send(result)
  })
  app.post('/csat_response', async (request, reply) => {
    const result = await controller.createCsatResponse(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/csat_response/:id', async (request, reply) => {
    const result = await controller.getCsatResponseById(app, request)
    return reply.send(result)
  })
  app.put('/csat_response/:id', async (request, reply) => {
    const result = await controller.updateCsatResponse(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/csat_response/:id', async (request, reply) => {
    const result = await controller.deleteCsatResponse(app, request)
    return reply.send(result)
  })
}

export default CsatResponseRoutes
