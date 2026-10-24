import type { FeeStructureRequest } from './types/FeeStructureRequest'
import type { FeeStructureUpdateRequest } from './types/FeeStructureUpdateRequest'
import type { FeeStructureResponse } from './types/FeeStructureResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface FeeStructureController {
  listFeeStructure(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<FeeStructureResponse[]>>>
  createFeeStructure(app: FastifyInstance, input: FeeStructureRequest, request?: FastifyRequest): Promise<FeeStructureResponse>
  getFeeStructureById(app: FastifyInstance, request?: FastifyRequest): Promise<FeeStructureResponse>
  updateFeeStructure(app: FastifyInstance, input: FeeStructureUpdateRequest, request?: FastifyRequest): Promise<FeeStructureResponse>
  deleteFeeStructure(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
