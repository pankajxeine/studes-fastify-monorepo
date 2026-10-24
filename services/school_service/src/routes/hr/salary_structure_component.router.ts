import type { FastifyPluginAsync } from 'fastify'
import { SalaryStructureComponentService } from '../../services/hr/salary_structure_component/SalaryStructureComponentService'

const SalaryStructureComponentRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SalaryStructureComponentService()

  app.get('/salary_structure_component', async (request, reply) => {
    const result = await controller.listSalaryStructureComponent(app, request)
    return reply.send(result)
  })
  app.post('/salary_structure_component', async (request, reply) => {
    const result = await controller.createSalaryStructureComponent(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/salary_structure_component/:id', async (request, reply) => {
    const result = await controller.getSalaryStructureComponentById(app, request)
    return reply.send(result)
  })
  app.put('/salary_structure_component/:id', async (request, reply) => {
    const result = await controller.updateSalaryStructureComponent(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/salary_structure_component/:id', async (request, reply) => {
    const result = await controller.deleteSalaryStructureComponent(app, request)
    return reply.send(result)
  })
}

export default SalaryStructureComponentRoutes
