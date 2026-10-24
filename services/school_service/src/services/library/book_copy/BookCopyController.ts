import type { BookCopyRequest } from './types/BookCopyRequest'
import type { BookCopyUpdateRequest } from './types/BookCopyUpdateRequest'
import type { BookCopyResponse } from './types/BookCopyResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface BookCopyController {
  listBookCopy(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<BookCopyResponse[]>>>
  createBookCopy(app: FastifyInstance, input: BookCopyRequest, request?: FastifyRequest): Promise<BookCopyResponse>
  getBookCopyById(app: FastifyInstance, request?: FastifyRequest): Promise<BookCopyResponse>
  updateBookCopy(app: FastifyInstance, input: BookCopyUpdateRequest, request?: FastifyRequest): Promise<BookCopyResponse>
  deleteBookCopy(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
