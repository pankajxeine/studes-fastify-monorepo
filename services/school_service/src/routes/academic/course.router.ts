import type { FastifyPluginAsync } from 'fastify'
import { CourseService } from '../../services/academic/course/CourseService'

const CourseRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CourseService()

  app.get('/course', async (request, reply) => {
    const result = await controller.listCourse(app, request)
    return reply.send(result)
  })
  app.post('/course', async (request, reply) => {
    const result = await controller.createCourse(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/course/:id', async (request, reply) => {
    const result = await controller.getCourseById(app, request)
    return reply.send(result)
  })
  app.put('/course/:id', async (request, reply) => {
    const result = await controller.updateCourse(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/course/:id', async (request, reply) => {
    const result = await controller.deleteCourse(app, request)
    return reply.send(result)
  })
}

export default CourseRoutes
