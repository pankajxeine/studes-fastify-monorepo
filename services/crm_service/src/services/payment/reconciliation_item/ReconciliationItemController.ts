import type { ReconciliationItemRequest } from './types/ReconciliationItemRequest'
import type { ReconciliationItemUpdateRequest } from './types/ReconciliationItemUpdateRequest'
import type { ReconciliationItemResponse } from './types/ReconciliationItemResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ReconciliationItemController {
  listReconciliationItem(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ReconciliationItemResponse[]>>>
  createReconciliationItem(app: FastifyInstance, input: ReconciliationItemRequest, request?: FastifyRequest): Promise<ReconciliationItemResponse>
  getReconciliationItemById(app: FastifyInstance, request?: FastifyRequest): Promise<ReconciliationItemResponse>
  updateReconciliationItem(app: FastifyInstance, input: ReconciliationItemUpdateRequest, request?: FastifyRequest): Promise<ReconciliationItemResponse>
  deleteReconciliationItem(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
