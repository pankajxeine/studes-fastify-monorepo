import type { LessonPlanRequest } from './types/LessonPlanRequest'
import type { LessonPlanUpdateRequest } from './types/LessonPlanUpdateRequest'
import type { LessonPlanResponse } from './types/LessonPlanResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface LessonPlanController {
  listLessonPlan(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<LessonPlanResponse[]>>>
  createLessonPlan(app: FastifyInstance, input: LessonPlanRequest, request?: FastifyRequest): Promise<LessonPlanResponse>
  getLessonPlanById(app: FastifyInstance, request?: FastifyRequest): Promise<LessonPlanResponse>
  updateLessonPlan(app: FastifyInstance, input: LessonPlanUpdateRequest, request?: FastifyRequest): Promise<LessonPlanResponse>
  deleteLessonPlan(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
