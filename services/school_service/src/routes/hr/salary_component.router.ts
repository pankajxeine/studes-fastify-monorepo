import type { FastifyPluginAsync } from 'fastify'
import { SalaryComponentService } from '../../services/hr/salary_component/SalaryComponentService'

const SalaryComponentRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SalaryComponentService()

  app.get('/salary_component', async (request, reply) => {
    const result = await controller.listSalaryComponent(app, request)
    return reply.send(result)
  })
  app.post('/salary_component', async (request, reply) => {
    const result = await controller.createSalaryComponent(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/salary_component/:id', async (request, reply) => {
    const result = await controller.getSalaryComponentById(app, request)
    return reply.send(result)
  })
  app.put('/salary_component/:id', async (request, reply) => {
    const result = await controller.updateSalaryComponent(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/salary_component/:id', async (request, reply) => {
    const result = await controller.deleteSalaryComponent(app, request)
    return reply.send(result)
  })
}

export default SalaryComponentRoutes
