import type { PaymentMethodRequest } from './types/PaymentMethodRequest'
import type { PaymentMethodUpdateRequest } from './types/PaymentMethodUpdateRequest'
import type { PaymentMethodResponse } from './types/PaymentMethodResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PaymentMethodController {
  listPaymentMethod(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PaymentMethodResponse[]>>>
  createPaymentMethod(app: FastifyInstance, input: PaymentMethodRequest, request?: FastifyRequest): Promise<PaymentMethodResponse>
  getPaymentMethodById(app: FastifyInstance, request?: FastifyRequest): Promise<PaymentMethodResponse>
  updatePaymentMethod(app: FastifyInstance, input: PaymentMethodUpdateRequest, request?: FastifyRequest): Promise<PaymentMethodResponse>
  deletePaymentMethod(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
