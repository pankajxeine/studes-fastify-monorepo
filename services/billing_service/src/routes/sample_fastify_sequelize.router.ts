import type { FastifyPluginAsync } from 'fastify'
import { SampleFastifySequelizeService } from '../services/sample_fastify_sequelize/SampleFastifySequelizeService'

const SampleFastifySequelizeRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SampleFastifySequelizeService()

  app.get('/users', async (request, reply) => {
    const result = await controller.getUsers(app, request)
    return reply.send(result)
  })
  app.post('/users', async (request, reply) => {
    const result = await controller.postUsers(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/health', async (request, reply) => {
    const result = await controller.getHealth(app, request)
    return reply.send(result)
  })
  app.post('/login', async (request, reply) => {
    const result = await controller.postLogin(app, request.body as any, request)
    return reply.send(result)
  })
  app.post('/logout', async (request, reply) => {
    const result = await controller.postLogout(app, request)
    return reply.send(result)
  })
}

export default SampleFastifySequelizeRoutes
