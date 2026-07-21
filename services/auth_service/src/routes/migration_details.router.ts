import type { FastifyPluginAsync } from 'fastify'
import { MigrationDetailsService } from '../services/cpanel_router/migration_details/MigrationDetailsService'

const MigrationDetailsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new MigrationDetailsService()

  app.get('/migration_details', async (request, reply) => {

    return await reply.send(controller.listMigrationDetails(app, request))
  })
  app.post('/migration_details', async (request, reply) => {
    return await reply.send(controller.createMigrationDetail(app, request.body as any, request))
  })
  app.get('/migration_details/:id', async (request, reply) => {

    return await reply.send(controller.getMigrationDetailsById(app, request))
  })
  app.put('/migration_details/:id', async (request, reply) => {
    return await reply.send(controller.updateMigrationDetail(app, request.body as any, request))
  })
  app.delete('/migration_details/:id', async (request, reply) => {

    return await reply.send(controller.deleteMigrationDetail(app, request))
  })
}

export default MigrationDetailsRoutes
