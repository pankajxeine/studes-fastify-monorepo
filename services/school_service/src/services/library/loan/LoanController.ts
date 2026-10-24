import type { LoanRequest } from './types/LoanRequest'
import type { LoanUpdateRequest } from './types/LoanUpdateRequest'
import type { LoanResponse } from './types/LoanResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface LoanController {
  listLoan(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<LoanResponse[]>>>
  createLoan(app: FastifyInstance, input: LoanRequest, request?: FastifyRequest): Promise<LoanResponse>
  getLoanById(app: FastifyInstance, request?: FastifyRequest): Promise<LoanResponse>
  updateLoan(app: FastifyInstance, input: LoanUpdateRequest, request?: FastifyRequest): Promise<LoanResponse>
  deleteLoan(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
