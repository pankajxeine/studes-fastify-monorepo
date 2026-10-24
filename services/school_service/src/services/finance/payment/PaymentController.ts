import type { PaymentRequest } from './types/PaymentRequest'
import type { PaymentUpdateRequest } from './types/PaymentUpdateRequest'
import type { PaymentResponse } from './types/PaymentResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PaymentController {
  listPayment(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PaymentResponse[]>>>
  createPayment(app: FastifyInstance, input: PaymentRequest, request?: FastifyRequest): Promise<PaymentResponse>
  getPaymentById(app: FastifyInstance, request?: FastifyRequest): Promise<PaymentResponse>
  updatePayment(app: FastifyInstance, input: PaymentUpdateRequest, request?: FastifyRequest): Promise<PaymentResponse>
  deletePayment(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
