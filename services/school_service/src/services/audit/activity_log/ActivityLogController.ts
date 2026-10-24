import type { ActivityLogRequest } from './types/ActivityLogRequest'
import type { ActivityLogUpdateRequest } from './types/ActivityLogUpdateRequest'
import type { ActivityLogResponse } from './types/ActivityLogResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ActivityLogController {
  listActivityLog(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ActivityLogResponse[]>>>
  createActivityLog(app: FastifyInstance, input: ActivityLogRequest, request?: FastifyRequest): Promise<ActivityLogResponse>
  getActivityLogById(app: FastifyInstance, request?: FastifyRequest): Promise<ActivityLogResponse>
  updateActivityLog(app: FastifyInstance, input: ActivityLogUpdateRequest, request?: FastifyRequest): Promise<ActivityLogResponse>
  deleteActivityLog(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
