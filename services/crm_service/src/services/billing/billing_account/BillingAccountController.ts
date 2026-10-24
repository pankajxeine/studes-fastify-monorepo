import type { BillingAccountRequest } from './types/BillingAccountRequest'
import type { BillingAccountUpdateRequest } from './types/BillingAccountUpdateRequest'
import type { BillingAccountResponse } from './types/BillingAccountResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface BillingAccountController {
  listBillingAccount(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<BillingAccountResponse[]>>>
  createBillingAccount(app: FastifyInstance, input: BillingAccountRequest, request?: FastifyRequest): Promise<BillingAccountResponse>
  getBillingAccountById(app: FastifyInstance, request?: FastifyRequest): Promise<BillingAccountResponse>
  updateBillingAccount(app: FastifyInstance, input: BillingAccountUpdateRequest, request?: FastifyRequest): Promise<BillingAccountResponse>
  deleteBillingAccount(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
