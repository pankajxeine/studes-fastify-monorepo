import type { FastifyPluginAsync } from 'fastify'
import { MasterCredentialsService } from '../services/cpanel/master_credentials/MasterCredentialsService'

const MasterCredentialsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new MasterCredentialsService()

  app.get('/master_credentials', async (request, reply) => {
    const result = await controller.listMasterCredentials(app, request)
    return reply.send(result)
  })
  app.post('/master_credentials', async (request, reply) => {
    const result = await controller.createMasterCredential(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/master_credentials/:id', async (request, reply) => {
    const result = await controller.getMasterCredentialsById(app, request)
    return reply.send(result)
  })
  app.put('/master_credentials/:id', async (request, reply) => {
    const result = await controller.updateMasterCredential(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/master_credentials/:id', async (request, reply) => {
    const result = await controller.deleteMasterCredential(app, request)
    return reply.send(result)
  })
}

export default MasterCredentialsRoutes
