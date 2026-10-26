import type { FastifyPluginAsync } from 'fastify'
import { UserSessionService } from '../../services/iam/user_session/UserSessionService'

const UserSessionRoutes: FastifyPluginAsync = async (app) => {
  const controller = new UserSessionService()

  app.get('/user_session', { config: {"adminPermission":"iam.user_session.read"} }, async (request, reply) => {
    const result = await controller.listUserSession(app, request)
    return reply.send(result)
  })
  app.post('/user_session', { config: {"adminPermission":"iam.user_session.create"} }, async (request, reply) => {
    const result = await controller.createUserSession(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/user_session/:user_session_id', { config: {"adminPermission":"iam.user_session.read"} }, async (request, reply) => {
    const result = await controller.getUserSessionById(app, request)
    return reply.send(result)
  })
  app.put('/user_session/:user_session_id', { config: {"adminPermission":"iam.user_session.update"} }, async (request, reply) => {
    const result = await controller.updateUserSession(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/user_session/:user_session_id', { config: {"adminPermission":"iam.user_session.delete"} }, async (request, reply) => {
    const result = await controller.deleteUserSession(app, request)
    return reply.send(result)
  })
}

export default UserSessionRoutes
