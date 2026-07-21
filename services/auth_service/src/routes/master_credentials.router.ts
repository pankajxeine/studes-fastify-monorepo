import type { FastifyPluginAsync } from 'fastify'
import { MasterCredentialsService } from '../services/cpanel/master_credentials/MasterCredentialsService'

const MasterCredentialsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new MasterCredentialsService()

  app.get('/master_credentials', async (request, reply) => {

    return await reply.send(controller.listMasterCredentials(app, request))
  })
  app.post('/master_credentials', async (request, reply) => {
    return await reply.send(controller.createMasterCredential(app, request.body as any, request))
  })
  app.get('/master_credentials/:id', async (request, reply) => {

    return await reply.send(controller.getMasterCredentialsById(app, request))
  })
  app.put('/master_credentials/:id', async (request, reply) => {
    return await reply.send(controller.updateMasterCredential(app, request.body as any, request))
  })
  app.delete('/master_credentials/:id', async (request, reply) => {

    return await reply.send(controller.deleteMasterCredential(app, request))
  })
}

export default MasterCredentialsRoutes
