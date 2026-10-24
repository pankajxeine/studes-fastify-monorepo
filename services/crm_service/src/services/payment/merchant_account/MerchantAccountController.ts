import type { MerchantAccountRequest } from './types/MerchantAccountRequest'
import type { MerchantAccountUpdateRequest } from './types/MerchantAccountUpdateRequest'
import type { MerchantAccountResponse } from './types/MerchantAccountResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface MerchantAccountController {
  listMerchantAccount(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<MerchantAccountResponse[]>>>
  createMerchantAccount(app: FastifyInstance, input: MerchantAccountRequest, request?: FastifyRequest): Promise<MerchantAccountResponse>
  getMerchantAccountById(app: FastifyInstance, request?: FastifyRequest): Promise<MerchantAccountResponse>
  updateMerchantAccount(app: FastifyInstance, input: MerchantAccountUpdateRequest, request?: FastifyRequest): Promise<MerchantAccountResponse>
  deleteMerchantAccount(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
