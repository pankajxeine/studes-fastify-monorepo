import type { FastifyPluginAsync } from 'fastify'
import { SubstitutionService } from '../../services/timetable/substitution/SubstitutionService'

const SubstitutionRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SubstitutionService()

  app.get('/substitution', async (request, reply) => {
    const result = await controller.listSubstitution(app, request)
    return reply.send(result)
  })
  app.post('/substitution', async (request, reply) => {
    const result = await controller.createSubstitution(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/substitution/:id', async (request, reply) => {
    const result = await controller.getSubstitutionById(app, request)
    return reply.send(result)
  })
  app.put('/substitution/:id', async (request, reply) => {
    const result = await controller.updateSubstitution(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/substitution/:id', async (request, reply) => {
    const result = await controller.deleteSubstitution(app, request)
    return reply.send(result)
  })
}

export default SubstitutionRoutes
