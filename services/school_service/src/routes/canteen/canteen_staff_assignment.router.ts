import type { FastifyPluginAsync } from 'fastify'
import { CanteenStaffAssignmentService } from '../../services/canteen/canteen_staff_assignment/CanteenStaffAssignmentService'

const CanteenStaffAssignmentRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CanteenStaffAssignmentService()

  app.get('/canteen_staff_assignment', async (request, reply) => {
    const result = await controller.listCanteenStaffAssignment(app, request)
    return reply.send(result)
  })
  app.post('/canteen_staff_assignment', async (request, reply) => {
    const result = await controller.createCanteenStaffAssignment(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/canteen_staff_assignment/:id', async (request, reply) => {
    const result = await controller.getCanteenStaffAssignmentById(app, request)
    return reply.send(result)
  })
  app.put('/canteen_staff_assignment/:id', async (request, reply) => {
    const result = await controller.updateCanteenStaffAssignment(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/canteen_staff_assignment/:id', async (request, reply) => {
    const result = await controller.deleteCanteenStaffAssignment(app, request)
    return reply.send(result)
  })
}

export default CanteenStaffAssignmentRoutes
