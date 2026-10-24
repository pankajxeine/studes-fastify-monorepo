import type { BellScheduleRequest } from './types/BellScheduleRequest'
import type { BellScheduleUpdateRequest } from './types/BellScheduleUpdateRequest'
import type { BellScheduleResponse } from './types/BellScheduleResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface BellScheduleController {
  listBellSchedule(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<BellScheduleResponse[]>>>
  createBellSchedule(app: FastifyInstance, input: BellScheduleRequest, request?: FastifyRequest): Promise<BellScheduleResponse>
  getBellScheduleById(app: FastifyInstance, request?: FastifyRequest): Promise<BellScheduleResponse>
  updateBellSchedule(app: FastifyInstance, input: BellScheduleUpdateRequest, request?: FastifyRequest): Promise<BellScheduleResponse>
  deleteBellSchedule(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
