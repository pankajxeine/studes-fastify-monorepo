import type { PurchaseOrderLineRequest } from './types/PurchaseOrderLineRequest'
import type { PurchaseOrderLineUpdateRequest } from './types/PurchaseOrderLineUpdateRequest'
import type { PurchaseOrderLineResponse } from './types/PurchaseOrderLineResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PurchaseOrderLineController {
  listPurchaseOrderLine(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PurchaseOrderLineResponse[]>>>
  createPurchaseOrderLine(app: FastifyInstance, input: PurchaseOrderLineRequest, request?: FastifyRequest): Promise<PurchaseOrderLineResponse>
  getPurchaseOrderLineById(app: FastifyInstance, request?: FastifyRequest): Promise<PurchaseOrderLineResponse>
  updatePurchaseOrderLine(app: FastifyInstance, input: PurchaseOrderLineUpdateRequest, request?: FastifyRequest): Promise<PurchaseOrderLineResponse>
  deletePurchaseOrderLine(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
