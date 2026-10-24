import type { StockTransactionRequest } from './types/StockTransactionRequest'
import type { StockTransactionUpdateRequest } from './types/StockTransactionUpdateRequest'
import type { StockTransactionResponse } from './types/StockTransactionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface StockTransactionController {
  listStockTransaction(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<StockTransactionResponse[]>>>
  createStockTransaction(app: FastifyInstance, input: StockTransactionRequest, request?: FastifyRequest): Promise<StockTransactionResponse>
  getStockTransactionById(app: FastifyInstance, request?: FastifyRequest): Promise<StockTransactionResponse>
  updateStockTransaction(app: FastifyInstance, input: StockTransactionUpdateRequest, request?: FastifyRequest): Promise<StockTransactionResponse>
  deleteStockTransaction(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
