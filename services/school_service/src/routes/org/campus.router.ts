import type { FastifyPluginAsync } from 'fastify'
import { CampusService } from '../../services/org/campus/CampusService'

const CampusRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CampusService()

  app.get('/campus', async (request, reply) => {
    const result = await controller.listCampus(app, request)
    return reply.send(result)
  })
  app.post('/campus', async (request, reply) => {
    const result = await controller.createCampus(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/campus/:id', async (request, reply) => {
    const result = await controller.getCampusById(app, request)
    return reply.send(result)
  })
  app.put('/campus/:id', async (request, reply) => {
    const result = await controller.updateCampus(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/campus/:id', async (request, reply) => {
    const result = await controller.deleteCampus(app, request)
    return reply.send(result)
  })
}

export default CampusRoutes
