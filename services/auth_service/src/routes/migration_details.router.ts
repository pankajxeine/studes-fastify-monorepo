import type { FastifyPluginAsync } from 'fastify'
import { MigrationDetailsService } from '../services/cpanel_router/migration_details/MigrationDetailsService'

const MigrationDetailsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new MigrationDetailsService()

  app.get('/migration_details', async (request, reply) => {
    const result = await controller.listMigrationDetails(app, request)
    return reply.send(result)
  })
  app.post('/migration_details', async (request, reply) => {
    const result = await controller.createMigrationDetail(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/migration_details/:id', async (request, reply) => {
    const result = await controller.getMigrationDetailsById(app, request)
    return reply.send(result)
  })
  app.put('/migration_details/:id', async (request, reply) => {
    const result = await controller.updateMigrationDetail(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/migration_details/:id', async (request, reply) => {
    const result = await controller.deleteMigrationDetail(app, request)
    return reply.send(result)
  })
}

export default MigrationDetailsRoutes
