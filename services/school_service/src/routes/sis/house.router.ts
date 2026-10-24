import type { FastifyPluginAsync } from 'fastify'
import { HouseService } from '../../services/sis/house/HouseService'

const HouseRoutes: FastifyPluginAsync = async (app) => {
  const controller = new HouseService()

  app.get('/house', async (request, reply) => {
    const result = await controller.listHouse(app, request)
    return reply.send(result)
  })
  app.post('/house', async (request, reply) => {
    const result = await controller.createHouse(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/house/:id', async (request, reply) => {
    const result = await controller.getHouseById(app, request)
    return reply.send(result)
  })
  app.put('/house/:id', async (request, reply) => {
    const result = await controller.updateHouse(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/house/:id', async (request, reply) => {
    const result = await controller.deleteHouse(app, request)
    return reply.send(result)
  })
}

export default HouseRoutes
