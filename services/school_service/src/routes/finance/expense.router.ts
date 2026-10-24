import type { FastifyPluginAsync } from 'fastify'
import { ExpenseService } from '../../services/finance/expense/ExpenseService'

const ExpenseRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ExpenseService()

  app.get('/expense', async (request, reply) => {
    const result = await controller.listExpense(app, request)
    return reply.send(result)
  })
  app.post('/expense', async (request, reply) => {
    const result = await controller.createExpense(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/expense/:id', async (request, reply) => {
    const result = await controller.getExpenseById(app, request)
    return reply.send(result)
  })
  app.put('/expense/:id', async (request, reply) => {
    const result = await controller.updateExpense(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/expense/:id', async (request, reply) => {
    const result = await controller.deleteExpense(app, request)
    return reply.send(result)
  })
}

export default ExpenseRoutes
