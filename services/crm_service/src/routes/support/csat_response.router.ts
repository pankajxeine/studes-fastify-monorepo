import type { FastifyPluginAsync } from 'fastify'
import { CsatResponseService } from '../../services/support/csat_response/CsatResponseService'

const CsatResponseRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CsatResponseService()

  app.get('/csat_response', { config: {"adminPermission":"support.csat_response.read"} }, async (request, reply) => {
    const result = await controller.listCsatResponse(app, request)
    return reply.send(result)
  })
  app.post('/csat_response', { config: {"adminPermission":"support.csat_response.create"} }, async (request, reply) => {
    const result = await controller.createCsatResponse(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/csat_response/:csat_response_id', { config: {"adminPermission":"support.csat_response.read"} }, async (request, reply) => {
    const result = await controller.getCsatResponseById(app, request)
    return reply.send(result)
  })
  app.put('/csat_response/:csat_response_id', { config: {"adminPermission":"support.csat_response.update"} }, async (request, reply) => {
    const result = await controller.updateCsatResponse(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/csat_response/:csat_response_id', { config: {"adminPermission":"support.csat_response.delete"} }, async (request, reply) => {
    const result = await controller.deleteCsatResponse(app, request)
    return reply.send(result)
  })
}

export default CsatResponseRoutes
