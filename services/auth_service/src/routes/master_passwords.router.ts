import type { FastifyPluginAsync } from 'fastify'
import { MasterPasswordsService } from '../services/cpanels_router/master_passwords/MasterPasswordsService'

const MasterPasswordsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new MasterPasswordsService()
  app.get('/master_passwords', async (request, reply) => {
     return await reply.send(controller.listMasterPasswords(app, request))
  })
  app.post('/master_passwords', async (request, reply) => {
     return await reply.send(controller.createMasterPassword(app, request.body as any, request))
  })
  app.get('/master_passwords/:id', async (request, reply) => {
     return await reply.send(controller.getMasterPasswordsById(app, request))
  })
  app.put('/master_passwords/:id', async (request, reply) => {
     return await reply.send(controller.updateMasterPassword(app, request.body as any, request))
  })
  app.delete('/master_passwords/:id', async (request, reply) => {
      await controller.deleteMasterPassword(app, request) 

             reply.code(201) 
          
  })
}

export default MasterPasswordsRoutes
