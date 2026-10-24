import type { ReconciliationBatchRequest } from './types/ReconciliationBatchRequest'
import type { ReconciliationBatchUpdateRequest } from './types/ReconciliationBatchUpdateRequest'
import type { ReconciliationBatchResponse } from './types/ReconciliationBatchResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ReconciliationBatchController {
  listReconciliationBatch(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ReconciliationBatchResponse[]>>>
  createReconciliationBatch(app: FastifyInstance, input: ReconciliationBatchRequest, request?: FastifyRequest): Promise<ReconciliationBatchResponse>
  getReconciliationBatchById(app: FastifyInstance, request?: FastifyRequest): Promise<ReconciliationBatchResponse>
  updateReconciliationBatch(app: FastifyInstance, input: ReconciliationBatchUpdateRequest, request?: FastifyRequest): Promise<ReconciliationBatchResponse>
  deleteReconciliationBatch(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
