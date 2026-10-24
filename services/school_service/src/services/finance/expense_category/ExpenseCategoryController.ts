import type { ExpenseCategoryRequest } from './types/ExpenseCategoryRequest'
import type { ExpenseCategoryUpdateRequest } from './types/ExpenseCategoryUpdateRequest'
import type { ExpenseCategoryResponse } from './types/ExpenseCategoryResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ExpenseCategoryController {
  listExpenseCategory(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ExpenseCategoryResponse[]>>>
  createExpenseCategory(app: FastifyInstance, input: ExpenseCategoryRequest, request?: FastifyRequest): Promise<ExpenseCategoryResponse>
  getExpenseCategoryById(app: FastifyInstance, request?: FastifyRequest): Promise<ExpenseCategoryResponse>
  updateExpenseCategory(app: FastifyInstance, input: ExpenseCategoryUpdateRequest, request?: FastifyRequest): Promise<ExpenseCategoryResponse>
  deleteExpenseCategory(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
