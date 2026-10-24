import type { WalletTransactionRequest } from './types/WalletTransactionRequest'
import type { WalletTransactionUpdateRequest } from './types/WalletTransactionUpdateRequest'
import type { WalletTransactionResponse } from './types/WalletTransactionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface WalletTransactionController {
  listWalletTransaction(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<WalletTransactionResponse[]>>>
  createWalletTransaction(app: FastifyInstance, input: WalletTransactionRequest, request?: FastifyRequest): Promise<WalletTransactionResponse>
  getWalletTransactionById(app: FastifyInstance, request?: FastifyRequest): Promise<WalletTransactionResponse>
  updateWalletTransaction(app: FastifyInstance, input: WalletTransactionUpdateRequest, request?: FastifyRequest): Promise<WalletTransactionResponse>
  deleteWalletTransaction(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
