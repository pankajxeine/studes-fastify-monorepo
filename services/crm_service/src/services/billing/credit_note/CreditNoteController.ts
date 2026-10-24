import type { CreditNoteRequest } from './types/CreditNoteRequest'
import type { CreditNoteUpdateRequest } from './types/CreditNoteUpdateRequest'
import type { CreditNoteResponse } from './types/CreditNoteResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface CreditNoteController {
  listCreditNote(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CreditNoteResponse[]>>>
  createCreditNote(app: FastifyInstance, input: CreditNoteRequest, request?: FastifyRequest): Promise<CreditNoteResponse>
  getCreditNoteById(app: FastifyInstance, request?: FastifyRequest): Promise<CreditNoteResponse>
  updateCreditNote(app: FastifyInstance, input: CreditNoteUpdateRequest, request?: FastifyRequest): Promise<CreditNoteResponse>
  deleteCreditNote(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
