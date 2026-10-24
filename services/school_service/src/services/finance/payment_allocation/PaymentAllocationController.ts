import type { PaymentAllocationRequest } from './types/PaymentAllocationRequest'
import type { PaymentAllocationUpdateRequest } from './types/PaymentAllocationUpdateRequest'
import type { PaymentAllocationResponse } from './types/PaymentAllocationResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PaymentAllocationController {
  listPaymentAllocation(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PaymentAllocationResponse[]>>>
  createPaymentAllocation(app: FastifyInstance, input: PaymentAllocationRequest, request?: FastifyRequest): Promise<PaymentAllocationResponse>
  getPaymentAllocationById(app: FastifyInstance, request?: FastifyRequest): Promise<PaymentAllocationResponse>
  updatePaymentAllocation(app: FastifyInstance, input: PaymentAllocationUpdateRequest, request?: FastifyRequest): Promise<PaymentAllocationResponse>
  deletePaymentAllocation(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
