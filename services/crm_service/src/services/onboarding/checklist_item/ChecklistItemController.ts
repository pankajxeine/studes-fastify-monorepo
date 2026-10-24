import type { ChecklistItemRequest } from './types/ChecklistItemRequest'
import type { ChecklistItemUpdateRequest } from './types/ChecklistItemUpdateRequest'
import type { ChecklistItemResponse } from './types/ChecklistItemResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ChecklistItemController {
  listChecklistItem(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ChecklistItemResponse[]>>>
  createChecklistItem(app: FastifyInstance, input: ChecklistItemRequest, request?: FastifyRequest): Promise<ChecklistItemResponse>
  getChecklistItemById(app: FastifyInstance, request?: FastifyRequest): Promise<ChecklistItemResponse>
  updateChecklistItem(app: FastifyInstance, input: ChecklistItemUpdateRequest, request?: FastifyRequest): Promise<ChecklistItemResponse>
  deleteChecklistItem(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
