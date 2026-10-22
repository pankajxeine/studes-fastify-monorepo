import type { FastifyPluginAsync } from 'fastify'
import { MasterPasswordsService } from '../services/cpanel_router/master_passwords/MasterPasswordsService'

const MasterPasswordsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new MasterPasswordsService()

  app.get('/master_passwords', async (request, reply) => {
    const result = await controller.listMasterPasswords(app, request)
    return reply.send(result)
  })
  app.post('/master_passwords', async (request, reply) => {
    const result = await controller.createMasterPassword(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/master_passwords/:id', async (request, reply) => {
    const result = await controller.getMasterPasswordsById(app, request)
    return reply.send(result)
  })
  app.put('/master_passwords/:id', async (request, reply) => {
    const result = await controller.updateMasterPassword(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/master_passwords/:id', async (request, reply) => {
    const result = await controller.deleteMasterPassword(app, request)
    return reply.send(result)
  })
}

export default MasterPasswordsRoutes
