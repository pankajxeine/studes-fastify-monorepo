import type { FeeStructureItemRequest } from './types/FeeStructureItemRequest'
import type { FeeStructureItemUpdateRequest } from './types/FeeStructureItemUpdateRequest'
import type { FeeStructureItemResponse } from './types/FeeStructureItemResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface FeeStructureItemController {
  listFeeStructureItem(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<FeeStructureItemResponse[]>>>
  createFeeStructureItem(app: FastifyInstance, input: FeeStructureItemRequest, request?: FastifyRequest): Promise<FeeStructureItemResponse>
  getFeeStructureItemById(app: FastifyInstance, request?: FastifyRequest): Promise<FeeStructureItemResponse>
  updateFeeStructureItem(app: FastifyInstance, input: FeeStructureItemUpdateRequest, request?: FastifyRequest): Promise<FeeStructureItemResponse>
  deleteFeeStructureItem(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
