import type { FastifyPluginAsync } from 'fastify'
import { AssignmentsService } from '../services/assignments/AssignmentsService'

const AssignmentsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AssignmentsService()

  app.get('/assignments', async (request, reply) => {
    const result = await controller.listAssignments(app, request)
    return reply.send(result)
  })
  app.post('/assignments', async (request, reply) => {
    const result = await controller.createAssignment(app, request.body as any, request)
    return reply.send(result)
  })
  app.post('/assignments/:id/submissions', async (request, reply) => {
    const result = await controller.submitAssignment(app, request.body as any, request)
    return reply.send(result)
  })
}

export default AssignmentsRoutes
