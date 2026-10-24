import type { FastifyPluginAsync } from 'fastify'
import { DisciplinaryActionService } from '../../services/discipline/disciplinary_action/DisciplinaryActionService'

const DisciplinaryActionRoutes: FastifyPluginAsync = async (app) => {
  const controller = new DisciplinaryActionService()

  app.get('/disciplinary_action', async (request, reply) => {
    const result = await controller.listDisciplinaryAction(app, request)
    return reply.send(result)
  })
  app.post('/disciplinary_action', async (request, reply) => {
    const result = await controller.createDisciplinaryAction(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/disciplinary_action/:id', async (request, reply) => {
    const result = await controller.getDisciplinaryActionById(app, request)
    return reply.send(result)
  })
  app.put('/disciplinary_action/:id', async (request, reply) => {
    const result = await controller.updateDisciplinaryAction(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/disciplinary_action/:id', async (request, reply) => {
    const result = await controller.deleteDisciplinaryAction(app, request)
    return reply.send(result)
  })
}

export default DisciplinaryActionRoutes
