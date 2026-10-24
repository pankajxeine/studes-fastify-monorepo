import type { QuotaAlertRequest } from './types/QuotaAlertRequest'
import type { QuotaAlertUpdateRequest } from './types/QuotaAlertUpdateRequest'
import type { QuotaAlertResponse } from './types/QuotaAlertResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface QuotaAlertController {
  listQuotaAlert(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<QuotaAlertResponse[]>>>
  createQuotaAlert(app: FastifyInstance, input: QuotaAlertRequest, request?: FastifyRequest): Promise<QuotaAlertResponse>
  getQuotaAlertById(app: FastifyInstance, request?: FastifyRequest): Promise<QuotaAlertResponse>
  updateQuotaAlert(app: FastifyInstance, input: QuotaAlertUpdateRequest, request?: FastifyRequest): Promise<QuotaAlertResponse>
  deleteQuotaAlert(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
