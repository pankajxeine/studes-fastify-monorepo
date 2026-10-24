import type { BookRequest } from './types/BookRequest'
import type { BookUpdateRequest } from './types/BookUpdateRequest'
import type { BookResponse } from './types/BookResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface BookController {
  listBook(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<BookResponse[]>>>
  createBook(app: FastifyInstance, input: BookRequest, request?: FastifyRequest): Promise<BookResponse>
  getBookById(app: FastifyInstance, request?: FastifyRequest): Promise<BookResponse>
  updateBook(app: FastifyInstance, input: BookUpdateRequest, request?: FastifyRequest): Promise<BookResponse>
  deleteBook(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
