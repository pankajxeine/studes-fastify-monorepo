import type { FastifyPluginAsync } from 'fastify'
import { StudentTransferService } from '../../services/sis/student_transfer/StudentTransferService'

const StudentTransferRoutes: FastifyPluginAsync = async (app) => {
  const controller = new StudentTransferService()

  app.get('/student_transfer', async (request, reply) => {
    const result = await controller.listStudentTransfer(app, request)
    return reply.send(result)
  })
  app.post('/student_transfer', async (request, reply) => {
    const result = await controller.createStudentTransfer(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/student_transfer/:id', async (request, reply) => {
    const result = await controller.getStudentTransferById(app, request)
    return reply.send(result)
  })
  app.put('/student_transfer/:id', async (request, reply) => {
    const result = await controller.updateStudentTransfer(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/student_transfer/:id', async (request, reply) => {
    const result = await controller.deleteStudentTransfer(app, request)
    return reply.send(result)
  })
}

export default StudentTransferRoutes
