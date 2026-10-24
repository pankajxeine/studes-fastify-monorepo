import type { FastifyPluginAsync } from 'fastify'
import { ProgramCourseService } from '../../services/academic/program_course/ProgramCourseService'

const ProgramCourseRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ProgramCourseService()

  app.get('/program_course', async (request, reply) => {
    const result = await controller.listProgramCourse(app, request)
    return reply.send(result)
  })
  app.post('/program_course', async (request, reply) => {
    const result = await controller.createProgramCourse(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/program_course/:id', async (request, reply) => {
    const result = await controller.getProgramCourseById(app, request)
    return reply.send(result)
  })
  app.put('/program_course/:id', async (request, reply) => {
    const result = await controller.updateProgramCourse(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/program_course/:id', async (request, reply) => {
    const result = await controller.deleteProgramCourse(app, request)
    return reply.send(result)
  })
}

export default ProgramCourseRoutes
