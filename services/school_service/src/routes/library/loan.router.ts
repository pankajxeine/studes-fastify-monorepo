import type { FastifyPluginAsync } from 'fastify'
import { LoanService } from '../../services/library/loan/LoanService'

const LoanRoutes: FastifyPluginAsync = async (app) => {
  const controller = new LoanService()

  app.get('/loan', async (request, reply) => {
    const result = await controller.listLoan(app, request)
    return reply.send(result)
  })
  app.post('/loan', async (request, reply) => {
    const result = await controller.createLoan(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/loan/:id', async (request, reply) => {
    const result = await controller.getLoanById(app, request)
    return reply.send(result)
  })
  app.put('/loan/:id', async (request, reply) => {
    const result = await controller.updateLoan(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/loan/:id', async (request, reply) => {
    const result = await controller.deleteLoan(app, request)
    return reply.send(result)
  })
}

export default LoanRoutes
