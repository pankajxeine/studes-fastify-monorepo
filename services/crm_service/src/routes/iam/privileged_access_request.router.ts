import type { FastifyPluginAsync } from 'fastify'
import { PrivilegedAccessRequestService } from '../../services/iam/privileged_access_request/PrivilegedAccessRequestService'

const PrivilegedAccessRequestRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PrivilegedAccessRequestService()

  app.get('/privileged_access_request', { config: {"adminPermission":"iam.privileged_access_request.read"} }, async (request, reply) => {
    const result = await controller.listPrivilegedAccessRequest(app, request)
    return reply.send(result)
  })
  app.post('/privileged_access_request', { config: {"adminPermission":"iam.privileged_access_request.create"} }, async (request, reply) => {
    const result = await controller.createPrivilegedAccessRequest(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/privileged_access_request/:request_id', { config: {"adminPermission":"iam.privileged_access_request.read"} }, async (request, reply) => {
    const result = await controller.getPrivilegedAccessRequestById(app, request)
    return reply.send(result)
  })
  app.put('/privileged_access_request/:request_id', { config: {"adminPermission":"iam.privileged_access_request.update"} }, async (request, reply) => {
    const result = await controller.updatePrivilegedAccessRequest(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/privileged_access_request/:request_id', { config: {"adminPermission":"iam.privileged_access_request.delete"} }, async (request, reply) => {
    const result = await controller.deletePrivilegedAccessRequest(app, request)
    return reply.send(result)
  })
}

export default PrivilegedAccessRequestRoutes
