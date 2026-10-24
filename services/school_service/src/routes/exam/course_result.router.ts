import type { FastifyPluginAsync } from 'fastify'
import { CourseResultService } from '../../services/exam/course_result/CourseResultService'

const CourseResultRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CourseResultService()

  app.get('/course_result', async (request, reply) => {
    const result = await controller.listCourseResult(app, request)
    return reply.send(result)
  })
  app.post('/course_result', async (request, reply) => {
    const result = await controller.createCourseResult(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/course_result/:id', async (request, reply) => {
    const result = await controller.getCourseResultById(app, request)
    return reply.send(result)
  })
  app.put('/course_result/:id', async (request, reply) => {
    const result = await controller.updateCourseResult(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/course_result/:id', async (request, reply) => {
    const result = await controller.deleteCourseResult(app, request)
    return reply.send(result)
  })
}

export default CourseResultRoutes
