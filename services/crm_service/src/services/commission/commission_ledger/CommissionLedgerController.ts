import type { CommissionLedgerRequest } from './types/CommissionLedgerRequest'
import type { CommissionLedgerUpdateRequest } from './types/CommissionLedgerUpdateRequest'
import type { CommissionLedgerResponse } from './types/CommissionLedgerResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface CommissionLedgerController {
  listCommissionLedger(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CommissionLedgerResponse[]>>>
  createCommissionLedger(app: FastifyInstance, input: CommissionLedgerRequest, request?: FastifyRequest): Promise<CommissionLedgerResponse>
  getCommissionLedgerById(app: FastifyInstance, request?: FastifyRequest): Promise<CommissionLedgerResponse>
  updateCommissionLedger(app: FastifyInstance, input: CommissionLedgerUpdateRequest, request?: FastifyRequest): Promise<CommissionLedgerResponse>
  deleteCommissionLedger(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
