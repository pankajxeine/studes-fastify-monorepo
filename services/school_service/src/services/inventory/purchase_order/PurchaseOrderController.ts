import type { PurchaseOrderRequest } from './types/PurchaseOrderRequest'
import type { PurchaseOrderUpdateRequest } from './types/PurchaseOrderUpdateRequest'
import type { PurchaseOrderResponse } from './types/PurchaseOrderResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PurchaseOrderController {
  listPurchaseOrder(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PurchaseOrderResponse[]>>>
  createPurchaseOrder(app: FastifyInstance, input: PurchaseOrderRequest, request?: FastifyRequest): Promise<PurchaseOrderResponse>
  getPurchaseOrderById(app: FastifyInstance, request?: FastifyRequest): Promise<PurchaseOrderResponse>
  updatePurchaseOrder(app: FastifyInstance, input: PurchaseOrderUpdateRequest, request?: FastifyRequest): Promise<PurchaseOrderResponse>
  deletePurchaseOrder(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
