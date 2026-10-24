import type { FeeInstallmentRequest } from './types/FeeInstallmentRequest'
import type { FeeInstallmentUpdateRequest } from './types/FeeInstallmentUpdateRequest'
import type { FeeInstallmentResponse } from './types/FeeInstallmentResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface FeeInstallmentController {
  listFeeInstallment(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<FeeInstallmentResponse[]>>>
  createFeeInstallment(app: FastifyInstance, input: FeeInstallmentRequest, request?: FastifyRequest): Promise<FeeInstallmentResponse>
  getFeeInstallmentById(app: FastifyInstance, request?: FastifyRequest): Promise<FeeInstallmentResponse>
  updateFeeInstallment(app: FastifyInstance, input: FeeInstallmentUpdateRequest, request?: FastifyRequest): Promise<FeeInstallmentResponse>
  deleteFeeInstallment(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
