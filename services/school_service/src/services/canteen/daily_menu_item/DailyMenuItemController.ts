import type { DailyMenuItemRequest } from './types/DailyMenuItemRequest'
import type { DailyMenuItemUpdateRequest } from './types/DailyMenuItemUpdateRequest'
import type { DailyMenuItemResponse } from './types/DailyMenuItemResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface DailyMenuItemController {
  listDailyMenuItem(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<DailyMenuItemResponse[]>>>
  createDailyMenuItem(app: FastifyInstance, input: DailyMenuItemRequest, request?: FastifyRequest): Promise<DailyMenuItemResponse>
  getDailyMenuItemById(app: FastifyInstance, request?: FastifyRequest): Promise<DailyMenuItemResponse>
  updateDailyMenuItem(app: FastifyInstance, input: DailyMenuItemUpdateRequest, request?: FastifyRequest): Promise<DailyMenuItemResponse>
  deleteDailyMenuItem(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
