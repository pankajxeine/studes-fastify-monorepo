import type { FastifyPluginAsync } from 'fastify'
import { AssignmentService } from '../../services/lms/assignment/AssignmentService'

const AssignmentRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AssignmentService()

  app.get('/assignment', async (request, reply) => {
    const result = await controller.listAssignment(app, request)
    return reply.send(result)
  })
  app.post('/assignment', async (request, reply) => {
    const result = await controller.createAssignment(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/assignment/:id', async (request, reply) => {
    const result = await controller.getAssignmentById(app, request)
    return reply.send(result)
  })
  app.put('/assignment/:id', async (request, reply) => {
    const result = await controller.updateAssignment(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/assignment/:id', async (request, reply) => {
    const result = await controller.deleteAssignment(app, request)
    return reply.send(result)
  })
}

export default AssignmentRoutes
