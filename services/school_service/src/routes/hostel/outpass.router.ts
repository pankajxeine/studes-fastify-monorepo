import type { FastifyPluginAsync } from 'fastify'
import { OutpassService } from '../../services/hostel/outpass/OutpassService'

const OutpassRoutes: FastifyPluginAsync = async (app) => {
  const controller = new OutpassService()

  app.get('/outpass', async (request, reply) => {
    const result = await controller.listOutpass(app, request)
    return reply.send(result)
  })
  app.post('/outpass', async (request, reply) => {
    const result = await controller.createOutpass(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/outpass/:id', async (request, reply) => {
    const result = await controller.getOutpassById(app, request)
    return reply.send(result)
  })
  app.put('/outpass/:id', async (request, reply) => {
    const result = await controller.updateOutpass(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/outpass/:id', async (request, reply) => {
    const result = await controller.deleteOutpass(app, request)
    return reply.send(result)
  })
}

export default OutpassRoutes
