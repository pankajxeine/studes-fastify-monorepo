import type { MealPlanPeriodRequest } from './types/MealPlanPeriodRequest'
import type { MealPlanPeriodUpdateRequest } from './types/MealPlanPeriodUpdateRequest'
import type { MealPlanPeriodResponse } from './types/MealPlanPeriodResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface MealPlanPeriodController {
  listMealPlanPeriod(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<MealPlanPeriodResponse[]>>>
  createMealPlanPeriod(app: FastifyInstance, input: MealPlanPeriodRequest, request?: FastifyRequest): Promise<MealPlanPeriodResponse>
  getMealPlanPeriodById(app: FastifyInstance, request?: FastifyRequest): Promise<MealPlanPeriodResponse>
  updateMealPlanPeriod(app: FastifyInstance, input: MealPlanPeriodUpdateRequest, request?: FastifyRequest): Promise<MealPlanPeriodResponse>
  deleteMealPlanPeriod(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
