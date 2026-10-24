import type { BookAuthorRequest } from './types/BookAuthorRequest'
import type { BookAuthorUpdateRequest } from './types/BookAuthorUpdateRequest'
import type { BookAuthorResponse } from './types/BookAuthorResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface BookAuthorController {
  listBookAuthor(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<BookAuthorResponse[]>>>
  createBookAuthor(app: FastifyInstance, input: BookAuthorRequest, request?: FastifyRequest): Promise<BookAuthorResponse>
  getBookAuthorById(app: FastifyInstance, request?: FastifyRequest): Promise<BookAuthorResponse>
  updateBookAuthor(app: FastifyInstance, input: BookAuthorUpdateRequest, request?: FastifyRequest): Promise<BookAuthorResponse>
  deleteBookAuthor(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
