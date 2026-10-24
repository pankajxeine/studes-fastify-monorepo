import type { PayslipRequest } from './types/PayslipRequest'
import type { PayslipUpdateRequest } from './types/PayslipUpdateRequest'
import type { PayslipResponse } from './types/PayslipResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PayslipController {
  listPayslip(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PayslipResponse[]>>>
  createPayslip(app: FastifyInstance, input: PayslipRequest, request?: FastifyRequest): Promise<PayslipResponse>
  getPayslipById(app: FastifyInstance, request?: FastifyRequest): Promise<PayslipResponse>
  updatePayslip(app: FastifyInstance, input: PayslipUpdateRequest, request?: FastifyRequest): Promise<PayslipResponse>
  deletePayslip(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
