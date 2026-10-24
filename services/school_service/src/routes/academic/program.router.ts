import type { FastifyPluginAsync } from 'fastify'
import { ProgramService } from '../../services/academic/program/ProgramService'

const ProgramRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ProgramService()

  app.get('/program', async (request, reply) => {
    const result = await controller.listProgram(app, request)
    return reply.send(result)
  })
  app.post('/program', async (request, reply) => {
    const result = await controller.createProgram(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/program/:id', async (request, reply) => {
    const result = await controller.getProgramById(app, request)
    return reply.send(result)
  })
  app.put('/program/:id', async (request, reply) => {
    const result = await controller.updateProgram(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/program/:id', async (request, reply) => {
    const result = await controller.deleteProgram(app, request)
    return reply.send(result)
  })
}

export default ProgramRoutes
