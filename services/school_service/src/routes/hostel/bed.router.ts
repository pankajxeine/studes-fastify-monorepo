import type { FastifyPluginAsync } from 'fastify'
import { BedService } from '../../services/hostel/bed/BedService'

const BedRoutes: FastifyPluginAsync = async (app) => {
  const controller = new BedService()

  app.get('/bed', async (request, reply) => {
    const result = await controller.listBed(app, request)
    return reply.send(result)
  })
  app.post('/bed', async (request, reply) => {
    const result = await controller.createBed(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/bed/:id', async (request, reply) => {
    const result = await controller.getBedById(app, request)
    return reply.send(result)
  })
  app.put('/bed/:id', async (request, reply) => {
    const result = await controller.updateBed(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/bed/:id', async (request, reply) => {
    const result = await controller.deleteBed(app, request)
    return reply.send(result)
  })
}

export default BedRoutes
