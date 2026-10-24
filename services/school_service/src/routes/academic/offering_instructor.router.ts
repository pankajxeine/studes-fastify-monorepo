import type { FastifyPluginAsync } from 'fastify'
import { OfferingInstructorService } from '../../services/academic/offering_instructor/OfferingInstructorService'

const OfferingInstructorRoutes: FastifyPluginAsync = async (app) => {
  const controller = new OfferingInstructorService()

  app.get('/offering_instructor', async (request, reply) => {
    const result = await controller.listOfferingInstructor(app, request)
    return reply.send(result)
  })
  app.post('/offering_instructor', async (request, reply) => {
    const result = await controller.createOfferingInstructor(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/offering_instructor/:id', async (request, reply) => {
    const result = await controller.getOfferingInstructorById(app, request)
    return reply.send(result)
  })
  app.put('/offering_instructor/:id', async (request, reply) => {
    const result = await controller.updateOfferingInstructor(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/offering_instructor/:id', async (request, reply) => {
    const result = await controller.deleteOfferingInstructor(app, request)
    return reply.send(result)
  })
}

export default OfferingInstructorRoutes
