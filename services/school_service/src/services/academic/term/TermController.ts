import type { TermRequest } from './types/TermRequest'
import type { TermUpdateRequest } from './types/TermUpdateRequest'
import type { TermResponse } from './types/TermResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface TermController {
  listTerm(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TermResponse[]>>>
  createTerm(app: FastifyInstance, input: TermRequest, request?: FastifyRequest): Promise<TermResponse>
  getTermById(app: FastifyInstance, request?: FastifyRequest): Promise<TermResponse>
  updateTerm(app: FastifyInstance, input: TermUpdateRequest, request?: FastifyRequest): Promise<TermResponse>
  deleteTerm(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
