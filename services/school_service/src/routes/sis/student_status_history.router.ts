import type { FastifyPluginAsync } from 'fastify'
import { StudentStatusHistoryService } from '../../services/sis/student_status_history/StudentStatusHistoryService'

const StudentStatusHistoryRoutes: FastifyPluginAsync = async (app) => {
  const controller = new StudentStatusHistoryService()

  app.get('/student_status_history', async (request, reply) => {
    const result = await controller.listStudentStatusHistory(app, request)
    return reply.send(result)
  })
  app.post('/student_status_history', async (request, reply) => {
    const result = await controller.createStudentStatusHistory(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/student_status_history/:id', async (request, reply) => {
    const result = await controller.getStudentStatusHistoryById(app, request)
    return reply.send(result)
  })
  app.put('/student_status_history/:id', async (request, reply) => {
    const result = await controller.updateStudentStatusHistory(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/student_status_history/:id', async (request, reply) => {
    const result = await controller.deleteStudentStatusHistory(app, request)
    return reply.send(result)
  })
}

export default StudentStatusHistoryRoutes
