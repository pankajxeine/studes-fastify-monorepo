import type { FastifyPluginAsync } from 'fastify'
import { AlumnusService } from '../../services/alumni/alumnus/AlumnusService'

const AlumnusRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AlumnusService()

  app.get('/alumnus', async (request, reply) => {
    const result = await controller.listAlumnus(app, request)
    return reply.send(result)
  })
  app.post('/alumnus', async (request, reply) => {
    const result = await controller.createAlumnus(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/alumnus/:id', async (request, reply) => {
    const result = await controller.getAlumnusById(app, request)
    return reply.send(result)
  })
  app.put('/alumnus/:id', async (request, reply) => {
    const result = await controller.updateAlumnus(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/alumnus/:id', async (request, reply) => {
    const result = await controller.deleteAlumnus(app, request)
    return reply.send(result)
  })
}

export default AlumnusRoutes
