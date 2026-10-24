import type { FastifyPluginAsync } from 'fastify'
import { CoursePrerequisiteService } from '../../services/academic/course_prerequisite/CoursePrerequisiteService'

const CoursePrerequisiteRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CoursePrerequisiteService()

  app.get('/course_prerequisite', async (request, reply) => {
    const result = await controller.listCoursePrerequisite(app, request)
    return reply.send(result)
  })
  app.post('/course_prerequisite', async (request, reply) => {
    const result = await controller.createCoursePrerequisite(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/course_prerequisite/:id', async (request, reply) => {
    const result = await controller.getCoursePrerequisiteById(app, request)
    return reply.send(result)
  })
  app.put('/course_prerequisite/:id', async (request, reply) => {
    const result = await controller.updateCoursePrerequisite(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/course_prerequisite/:id', async (request, reply) => {
    const result = await controller.deleteCoursePrerequisite(app, request)
    return reply.send(result)
  })
}

export default CoursePrerequisiteRoutes
