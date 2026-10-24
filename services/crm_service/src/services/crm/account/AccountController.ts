import type { AccountRequest } from './types/AccountRequest'
import type { AccountUpdateRequest } from './types/AccountUpdateRequest'
import type { AccountResponse } from './types/AccountResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface AccountController {
  listAccount(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AccountResponse[]>>>
  createAccount(app: FastifyInstance, input: AccountRequest, request?: FastifyRequest): Promise<AccountResponse>
  getAccountById(app: FastifyInstance, request?: FastifyRequest): Promise<AccountResponse>
  updateAccount(app: FastifyInstance, input: AccountUpdateRequest, request?: FastifyRequest): Promise<AccountResponse>
  deleteAccount(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
