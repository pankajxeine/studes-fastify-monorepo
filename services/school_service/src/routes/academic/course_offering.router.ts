import type { FastifyPluginAsync } from 'fastify'
import { CourseOfferingService } from '../../services/academic/course_offering/CourseOfferingService'

const CourseOfferingRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CourseOfferingService()

  app.get('/course_offering', async (request, reply) => {
    const result = await controller.listCourseOffering(app, request)
    return reply.send(result)
  })
  app.post('/course_offering', async (request, reply) => {
    const result = await controller.createCourseOffering(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/course_offering/:id', async (request, reply) => {
    const result = await controller.getCourseOfferingById(app, request)
    return reply.send(result)
  })
  app.put('/course_offering/:id', async (request, reply) => {
    const result = await controller.updateCourseOffering(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/course_offering/:id', async (request, reply) => {
    const result = await controller.deleteCourseOffering(app, request)
    return reply.send(result)
  })
}

export default CourseOfferingRoutes
