import type { MealSubscriptionRequest } from './types/MealSubscriptionRequest'
import type { MealSubscriptionUpdateRequest } from './types/MealSubscriptionUpdateRequest'
import type { MealSubscriptionResponse } from './types/MealSubscriptionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface MealSubscriptionController {
  listMealSubscription(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<MealSubscriptionResponse[]>>>
  createMealSubscription(app: FastifyInstance, input: MealSubscriptionRequest, request?: FastifyRequest): Promise<MealSubscriptionResponse>
  getMealSubscriptionById(app: FastifyInstance, request?: FastifyRequest): Promise<MealSubscriptionResponse>
  updateMealSubscription(app: FastifyInstance, input: MealSubscriptionUpdateRequest, request?: FastifyRequest): Promise<MealSubscriptionResponse>
  deleteMealSubscription(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
