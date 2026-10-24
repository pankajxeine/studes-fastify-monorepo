import type { MealPlanRequest } from './types/MealPlanRequest'
import type { MealPlanUpdateRequest } from './types/MealPlanUpdateRequest'
import type { MealPlanResponse } from './types/MealPlanResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface MealPlanController {
  listMealPlan(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<MealPlanResponse[]>>>
  createMealPlan(app: FastifyInstance, input: MealPlanRequest, request?: FastifyRequest): Promise<MealPlanResponse>
  getMealPlanById(app: FastifyInstance, request?: FastifyRequest): Promise<MealPlanResponse>
  updateMealPlan(app: FastifyInstance, input: MealPlanUpdateRequest, request?: FastifyRequest): Promise<MealPlanResponse>
  deleteMealPlan(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
