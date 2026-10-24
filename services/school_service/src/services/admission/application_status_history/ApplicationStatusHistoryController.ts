import type { ApplicationStatusHistoryRequest } from './types/ApplicationStatusHistoryRequest'
import type { ApplicationStatusHistoryUpdateRequest } from './types/ApplicationStatusHistoryUpdateRequest'
import type { ApplicationStatusHistoryResponse } from './types/ApplicationStatusHistoryResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ApplicationStatusHistoryController {
  listApplicationStatusHistory(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ApplicationStatusHistoryResponse[]>>>
  createApplicationStatusHistory(app: FastifyInstance, input: ApplicationStatusHistoryRequest, request?: FastifyRequest): Promise<ApplicationStatusHistoryResponse>
  getApplicationStatusHistoryById(app: FastifyInstance, request?: FastifyRequest): Promise<ApplicationStatusHistoryResponse>
  updateApplicationStatusHistory(app: FastifyInstance, input: ApplicationStatusHistoryUpdateRequest, request?: FastifyRequest): Promise<ApplicationStatusHistoryResponse>
  deleteApplicationStatusHistory(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
