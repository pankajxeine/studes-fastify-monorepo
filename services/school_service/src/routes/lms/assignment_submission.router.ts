import type { FastifyPluginAsync } from 'fastify'
import { AssignmentSubmissionService } from '../../services/lms/assignment_submission/AssignmentSubmissionService'

const AssignmentSubmissionRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AssignmentSubmissionService()

  app.get('/assignment_submission', async (request, reply) => {
    const result = await controller.listAssignmentSubmission(app, request)
    return reply.send(result)
  })
  app.post('/assignment_submission', async (request, reply) => {
    const result = await controller.createAssignmentSubmission(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/assignment_submission/:id', async (request, reply) => {
    const result = await controller.getAssignmentSubmissionById(app, request)
    return reply.send(result)
  })
  app.put('/assignment_submission/:id', async (request, reply) => {
    const result = await controller.updateAssignmentSubmission(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/assignment_submission/:id', async (request, reply) => {
    const result = await controller.deleteAssignmentSubmission(app, request)
    return reply.send(result)
  })
}

export default AssignmentSubmissionRoutes
