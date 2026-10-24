import type { MealPeriodRequest } from './types/MealPeriodRequest'
import type { MealPeriodUpdateRequest } from './types/MealPeriodUpdateRequest'
import type { MealPeriodResponse } from './types/MealPeriodResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface MealPeriodController {
  listMealPeriod(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<MealPeriodResponse[]>>>
  createMealPeriod(app: FastifyInstance, input: MealPeriodRequest, request?: FastifyRequest): Promise<MealPeriodResponse>
  getMealPeriodById(app: FastifyInstance, request?: FastifyRequest): Promise<MealPeriodResponse>
  updateMealPeriod(app: FastifyInstance, input: MealPeriodUpdateRequest, request?: FastifyRequest): Promise<MealPeriodResponse>
  deleteMealPeriod(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
