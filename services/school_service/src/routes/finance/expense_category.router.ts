import type { FastifyPluginAsync } from 'fastify'
import { ExpenseCategoryService } from '../../services/finance/expense_category/ExpenseCategoryService'

const ExpenseCategoryRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ExpenseCategoryService()

  app.get('/expense_category', async (request, reply) => {
    const result = await controller.listExpenseCategory(app, request)
    return reply.send(result)
  })
  app.post('/expense_category', async (request, reply) => {
    const result = await controller.createExpenseCategory(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/expense_category/:id', async (request, reply) => {
    const result = await controller.getExpenseCategoryById(app, request)
    return reply.send(result)
  })
  app.put('/expense_category/:id', async (request, reply) => {
    const result = await controller.updateExpenseCategory(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/expense_category/:id', async (request, reply) => {
    const result = await controller.deleteExpenseCategory(app, request)
    return reply.send(result)
  })
}

export default ExpenseCategoryRoutes
