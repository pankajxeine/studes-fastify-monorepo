import type { ActivityRequest } from './types/ActivityRequest'
import type { ActivityUpdateRequest } from './types/ActivityUpdateRequest'
import type { ActivityResponse } from './types/ActivityResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ActivityController {
  listActivity(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ActivityResponse[]>>>
  createActivity(app: FastifyInstance, input: ActivityRequest, request?: FastifyRequest): Promise<ActivityResponse>
  getActivityById(app: FastifyInstance, request?: FastifyRequest): Promise<ActivityResponse>
  updateActivity(app: FastifyInstance, input: ActivityUpdateRequest, request?: FastifyRequest): Promise<ActivityResponse>
  deleteActivity(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
