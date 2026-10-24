import type { WeeklyMenuItemRequest } from './types/WeeklyMenuItemRequest'
import type { WeeklyMenuItemUpdateRequest } from './types/WeeklyMenuItemUpdateRequest'
import type { WeeklyMenuItemResponse } from './types/WeeklyMenuItemResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface WeeklyMenuItemController {
  listWeeklyMenuItem(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<WeeklyMenuItemResponse[]>>>
  createWeeklyMenuItem(app: FastifyInstance, input: WeeklyMenuItemRequest, request?: FastifyRequest): Promise<WeeklyMenuItemResponse>
  getWeeklyMenuItemById(app: FastifyInstance, request?: FastifyRequest): Promise<WeeklyMenuItemResponse>
  updateWeeklyMenuItem(app: FastifyInstance, input: WeeklyMenuItemUpdateRequest, request?: FastifyRequest): Promise<WeeklyMenuItemResponse>
  deleteWeeklyMenuItem(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
