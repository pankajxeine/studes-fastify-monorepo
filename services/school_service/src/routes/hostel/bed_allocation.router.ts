import type { FastifyPluginAsync } from 'fastify'
import { BedAllocationService } from '../../services/hostel/bed_allocation/BedAllocationService'

const BedAllocationRoutes: FastifyPluginAsync = async (app) => {
  const controller = new BedAllocationService()

  app.get('/bed_allocation', async (request, reply) => {
    const result = await controller.listBedAllocation(app, request)
    return reply.send(result)
  })
  app.post('/bed_allocation', async (request, reply) => {
    const result = await controller.createBedAllocation(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/bed_allocation/:id', async (request, reply) => {
    const result = await controller.getBedAllocationById(app, request)
    return reply.send(result)
  })
  app.put('/bed_allocation/:id', async (request, reply) => {
    const result = await controller.updateBedAllocation(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/bed_allocation/:id', async (request, reply) => {
    const result = await controller.deleteBedAllocation(app, request)
    return reply.send(result)
  })
}

export default BedAllocationRoutes
