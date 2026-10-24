import type { FastifyPluginAsync } from 'fastify'
import { StudentTransportService } from '../../services/transport/student_transport/StudentTransportService'

const StudentTransportRoutes: FastifyPluginAsync = async (app) => {
  const controller = new StudentTransportService()

  app.get('/student_transport', async (request, reply) => {
    const result = await controller.listStudentTransport(app, request)
    return reply.send(result)
  })
  app.post('/student_transport', async (request, reply) => {
    const result = await controller.createStudentTransport(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/student_transport/:id', async (request, reply) => {
    const result = await controller.getStudentTransportById(app, request)
    return reply.send(result)
  })
  app.put('/student_transport/:id', async (request, reply) => {
    const result = await controller.updateStudentTransport(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/student_transport/:id', async (request, reply) => {
    const result = await controller.deleteStudentTransport(app, request)
    return reply.send(result)
  })
}

export default StudentTransportRoutes
