import type { FastifyPluginAsync } from 'fastify'
import { RoleConflictService } from '../../services/iam/role_conflict/RoleConflictService'

const RoleConflictRoutes: FastifyPluginAsync = async (app) => {
  const controller = new RoleConflictService()

  app.get('/role_conflict', async (request, reply) => {
    const result = await controller.listRoleConflict(app, request)
    return reply.send(result)
  })
  app.post('/role_conflict', async (request, reply) => {
    const result = await controller.createRoleConflict(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/role_conflict/:id', async (request, reply) => {
    const result = await controller.getRoleConflictById(app, request)
    return reply.send(result)
  })
  app.put('/role_conflict/:id', async (request, reply) => {
    const result = await controller.updateRoleConflict(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/role_conflict/:id', async (request, reply) => {
    const result = await controller.deleteRoleConflict(app, request)
    return reply.send(result)
  })
}

export default RoleConflictRoutes
