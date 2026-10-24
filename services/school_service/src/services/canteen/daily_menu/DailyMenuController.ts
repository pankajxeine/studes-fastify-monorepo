import type { DailyMenuRequest } from './types/DailyMenuRequest'
import type { DailyMenuUpdateRequest } from './types/DailyMenuUpdateRequest'
import type { DailyMenuResponse } from './types/DailyMenuResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface DailyMenuController {
  listDailyMenu(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<DailyMenuResponse[]>>>
  createDailyMenu(app: FastifyInstance, input: DailyMenuRequest, request?: FastifyRequest): Promise<DailyMenuResponse>
  getDailyMenuById(app: FastifyInstance, request?: FastifyRequest): Promise<DailyMenuResponse>
  updateDailyMenu(app: FastifyInstance, input: DailyMenuUpdateRequest, request?: FastifyRequest): Promise<DailyMenuResponse>
  deleteDailyMenu(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
