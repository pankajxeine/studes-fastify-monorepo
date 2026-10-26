import type { FastifyPluginAsync } from 'fastify'
import { DeprovisionRequestService } from '../../services/provisioning/deprovision_request/DeprovisionRequestService'

const DeprovisionRequestRoutes: FastifyPluginAsync = async (app) => {
  const controller = new DeprovisionRequestService()

  app.get('/deprovision_request', { config: {"adminPermission":"provisioning.deprovision_request.read"} }, async (request, reply) => {
    const result = await controller.listDeprovisionRequest(app, request)
    return reply.send(result)
  })
  app.post('/deprovision_request', { config: {"adminPermission":"provisioning.deprovision_request.create"} }, async (request, reply) => {
    const result = await controller.createDeprovisionRequest(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/deprovision_request/:deprovision_request_id', { config: {"adminPermission":"provisioning.deprovision_request.read"} }, async (request, reply) => {
    const result = await controller.getDeprovisionRequestById(app, request)
    return reply.send(result)
  })
  app.put('/deprovision_request/:deprovision_request_id', { config: {"adminPermission":"provisioning.deprovision_request.update"} }, async (request, reply) => {
    const result = await controller.updateDeprovisionRequest(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/deprovision_request/:deprovision_request_id', { config: {"adminPermission":"provisioning.deprovision_request.delete"} }, async (request, reply) => {
    const result = await controller.deleteDeprovisionRequest(app, request)
    return reply.send(result)
  })
}

export default DeprovisionRequestRoutes
