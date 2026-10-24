import type { FastifyPluginAsync } from 'fastify'
import { StudentConcessionService } from '../../services/finance/student_concession/StudentConcessionService'

const StudentConcessionRoutes: FastifyPluginAsync = async (app) => {
  const controller = new StudentConcessionService()

  app.get('/student_concession', async (request, reply) => {
    const result = await controller.listStudentConcession(app, request)
    return reply.send(result)
  })
  app.post('/student_concession', async (request, reply) => {
    const result = await controller.createStudentConcession(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/student_concession/:id', async (request, reply) => {
    const result = await controller.getStudentConcessionById(app, request)
    return reply.send(result)
  })
  app.put('/student_concession/:id', async (request, reply) => {
    const result = await controller.updateStudentConcession(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/student_concession/:id', async (request, reply) => {
    const result = await controller.deleteStudentConcession(app, request)
    return reply.send(result)
  })
}

export default StudentConcessionRoutes
