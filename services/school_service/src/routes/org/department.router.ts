import type { FastifyPluginAsync } from 'fastify'
import { DepartmentService } from '../../services/org/department/DepartmentService'

const DepartmentRoutes: FastifyPluginAsync = async (app) => {
  const controller = new DepartmentService()

  app.get('/department', async (request, reply) => {
    const result = await controller.listDepartment(app, request)
    return reply.send(result)
  })
  app.post('/department', async (request, reply) => {
    const result = await controller.createDepartment(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/department/:id', async (request, reply) => {
    const result = await controller.getDepartmentById(app, request)
    return reply.send(result)
  })
  app.put('/department/:id', async (request, reply) => {
    const result = await controller.updateDepartment(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/department/:id', async (request, reply) => {
    const result = await controller.deleteDepartment(app, request)
    return reply.send(result)
  })
}

export default DepartmentRoutes
