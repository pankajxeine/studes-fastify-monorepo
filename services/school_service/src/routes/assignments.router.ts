import type { FastifyPluginAsync } from 'fastify'
import { AssignmentsService } from '../services/AssignmentsService'

const AssignmentsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AssignmentsService()
  app.get('/assignments', async (request, reply) => {
    return await controller.listAssignments(app, request)
  })
  app.post('/assignments', async (request, reply) => {
    return await controller.createAssignment(app, request.body as any, request)
  })
  app.post('/assignments/:id/submissions', async (request, reply) => {
    return await controller.submitAssignment(app, request.body as any, request)
  })
}

export default AssignmentsRoutes
