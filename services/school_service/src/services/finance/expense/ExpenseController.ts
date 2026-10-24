import type { ExpenseRequest } from './types/ExpenseRequest'
import type { ExpenseUpdateRequest } from './types/ExpenseUpdateRequest'
import type { ExpenseResponse } from './types/ExpenseResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ExpenseController {
  listExpense(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ExpenseResponse[]>>>
  createExpense(app: FastifyInstance, input: ExpenseRequest, request?: FastifyRequest): Promise<ExpenseResponse>
  getExpenseById(app: FastifyInstance, request?: FastifyRequest): Promise<ExpenseResponse>
  updateExpense(app: FastifyInstance, input: ExpenseUpdateRequest, request?: FastifyRequest): Promise<ExpenseResponse>
  deleteExpense(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
