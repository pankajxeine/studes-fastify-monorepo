import type { PayslipLineRequest } from './types/PayslipLineRequest'
import type { PayslipLineUpdateRequest } from './types/PayslipLineUpdateRequest'
import type { PayslipLineResponse } from './types/PayslipLineResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PayslipLineController {
  listPayslipLine(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PayslipLineResponse[]>>>
  createPayslipLine(app: FastifyInstance, input: PayslipLineRequest, request?: FastifyRequest): Promise<PayslipLineResponse>
  getPayslipLineById(app: FastifyInstance, request?: FastifyRequest): Promise<PayslipLineResponse>
  updatePayslipLine(app: FastifyInstance, input: PayslipLineUpdateRequest, request?: FastifyRequest): Promise<PayslipLineResponse>
  deletePayslipLine(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
