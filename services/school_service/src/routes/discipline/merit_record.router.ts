import type { FastifyPluginAsync } from 'fastify'
import { MeritRecordService } from '../../services/discipline/merit_record/MeritRecordService'

const MeritRecordRoutes: FastifyPluginAsync = async (app) => {
  const controller = new MeritRecordService()

  app.get('/merit_record', async (request, reply) => {
    const result = await controller.listMeritRecord(app, request)
    return reply.send(result)
  })
  app.post('/merit_record', async (request, reply) => {
    const result = await controller.createMeritRecord(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/merit_record/:id', async (request, reply) => {
    const result = await controller.getMeritRecordById(app, request)
    return reply.send(result)
  })
  app.put('/merit_record/:id', async (request, reply) => {
    const result = await controller.updateMeritRecord(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/merit_record/:id', async (request, reply) => {
    const result = await controller.deleteMeritRecord(app, request)
    return reply.send(result)
  })
}

export default MeritRecordRoutes
