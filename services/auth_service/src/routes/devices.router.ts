import type { FastifyPluginAsync } from 'fastify'
import { DevicesService } from '../services/cpanels/devices/DevicesService'

const DevicesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new DevicesService()

  app.get('/devices', async (request, reply) => {
    const result = await controller.listDevices(app, request)
    return reply.send(result)
  })
  app.post('/devices', async (request, reply) => {
    const result = await controller.createDevice(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/devices/:id', async (request, reply) => {
    const result = await controller.getDevicesById(app, request)
    return reply.send(result)
  })
  app.put('/devices/:id', async (request, reply) => {
    const result = await controller.updateDevice(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/devices/:id', async (request, reply) => {
    const result = await controller.deleteDevice(app, request)
    return reply.send(result)
  })
}

export default DevicesRoutes
