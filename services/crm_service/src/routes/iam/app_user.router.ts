import type { FastifyPluginAsync } from 'fastify'
import { AppUserService } from '../../services/iam/app_user/AppUserService'

const AppUserRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AppUserService()

  app.get('/app_user', async (request, reply) => {
    const result = await controller.listAppUser(app, request)
    return reply.send(result)
  })
  app.post('/app_user', async (request, reply) => {
    const result = await controller.createAppUser(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/app_user/:id', async (request, reply) => {
    const result = await controller.getAppUserById(app, request)
    return reply.send(result)
  })
  app.put('/app_user/:id', async (request, reply) => {
    const result = await controller.updateAppUser(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/app_user/:id', async (request, reply) => {
    const result = await controller.deleteAppUser(app, request)
    return reply.send(result)
  })
}

export default AppUserRoutes
