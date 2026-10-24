import type { WalletRequest } from './types/WalletRequest'
import type { WalletUpdateRequest } from './types/WalletUpdateRequest'
import type { WalletResponse } from './types/WalletResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface WalletController {
  listWallet(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<WalletResponse[]>>>
  createWallet(app: FastifyInstance, input: WalletRequest, request?: FastifyRequest): Promise<WalletResponse>
  getWalletById(app: FastifyInstance, request?: FastifyRequest): Promise<WalletResponse>
  updateWallet(app: FastifyInstance, input: WalletUpdateRequest, request?: FastifyRequest): Promise<WalletResponse>
  deleteWallet(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
