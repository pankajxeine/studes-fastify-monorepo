import type { FastifyPluginAsync } from 'fastify'
import { StaffSalaryAssignmentService } from '../../services/hr/staff_salary_assignment/StaffSalaryAssignmentService'

const StaffSalaryAssignmentRoutes: FastifyPluginAsync = async (app) => {
  const controller = new StaffSalaryAssignmentService()

  app.get('/staff_salary_assignment', async (request, reply) => {
    const result = await controller.listStaffSalaryAssignment(app, request)
    return reply.send(result)
  })
  app.post('/staff_salary_assignment', async (request, reply) => {
    const result = await controller.createStaffSalaryAssignment(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/staff_salary_assignment/:id', async (request, reply) => {
    const result = await controller.getStaffSalaryAssignmentById(app, request)
    return reply.send(result)
  })
  app.put('/staff_salary_assignment/:id', async (request, reply) => {
    const result = await controller.updateStaffSalaryAssignment(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/staff_salary_assignment/:id', async (request, reply) => {
    const result = await controller.deleteStaffSalaryAssignment(app, request)
    return reply.send(result)
  })
}

export default StaffSalaryAssignmentRoutes
