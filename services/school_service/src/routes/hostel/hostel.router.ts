import type { FastifyPluginAsync } from 'fastify'
import { HostelService } from '../../services/hostel/hostel/HostelService'

const HostelRoutes: FastifyPluginAsync = async (app) => {
  const controller = new HostelService()

  app.get('/hostel', async (request, reply) => {
    const result = await controller.listHostel(app, request)
    return reply.send(result)
  })
  app.post('/hostel', async (request, reply) => {
    const result = await controller.createHostel(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/hostel/:id', async (request, reply) => {
    const result = await controller.getHostelById(app, request)
    return reply.send(result)
  })
  app.put('/hostel/:id', async (request, reply) => {
    const result = await controller.updateHostel(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/hostel/:id', async (request, reply) => {
    const result = await controller.deleteHostel(app, request)
    return reply.send(result)
  })
}

export default HostelRoutes
