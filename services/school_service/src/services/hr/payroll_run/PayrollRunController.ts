import type { PayrollRunRequest } from './types/PayrollRunRequest'
import type { PayrollRunUpdateRequest } from './types/PayrollRunUpdateRequest'
import type { PayrollRunResponse } from './types/PayrollRunResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PayrollRunController {
  listPayrollRun(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PayrollRunResponse[]>>>
  createPayrollRun(app: FastifyInstance, input: PayrollRunRequest, request?: FastifyRequest): Promise<PayrollRunResponse>
  getPayrollRunById(app: FastifyInstance, request?: FastifyRequest): Promise<PayrollRunResponse>
  updatePayrollRun(app: FastifyInstance, input: PayrollRunUpdateRequest, request?: FastifyRequest): Promise<PayrollRunResponse>
  deletePayrollRun(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
