import type { WeeklyMenuRequest } from './types/WeeklyMenuRequest'
import type { WeeklyMenuUpdateRequest } from './types/WeeklyMenuUpdateRequest'
import type { WeeklyMenuResponse } from './types/WeeklyMenuResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface WeeklyMenuController {
  listWeeklyMenu(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<WeeklyMenuResponse[]>>>
  createWeeklyMenu(app: FastifyInstance, input: WeeklyMenuRequest, request?: FastifyRequest): Promise<WeeklyMenuResponse>
  getWeeklyMenuById(app: FastifyInstance, request?: FastifyRequest): Promise<WeeklyMenuResponse>
  updateWeeklyMenu(app: FastifyInstance, input: WeeklyMenuUpdateRequest, request?: FastifyRequest): Promise<WeeklyMenuResponse>
  deleteWeeklyMenu(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
