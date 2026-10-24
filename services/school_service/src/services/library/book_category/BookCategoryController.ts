import type { BookCategoryRequest } from './types/BookCategoryRequest'
import type { BookCategoryUpdateRequest } from './types/BookCategoryUpdateRequest'
import type { BookCategoryResponse } from './types/BookCategoryResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface BookCategoryController {
  listBookCategory(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<BookCategoryResponse[]>>>
  createBookCategory(app: FastifyInstance, input: BookCategoryRequest, request?: FastifyRequest): Promise<BookCategoryResponse>
  getBookCategoryById(app: FastifyInstance, request?: FastifyRequest): Promise<BookCategoryResponse>
  updateBookCategory(app: FastifyInstance, input: BookCategoryUpdateRequest, request?: FastifyRequest): Promise<BookCategoryResponse>
  deleteBookCategory(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
