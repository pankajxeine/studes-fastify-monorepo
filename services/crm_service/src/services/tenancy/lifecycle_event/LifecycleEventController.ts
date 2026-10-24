import type { LifecycleEventRequest } from './types/LifecycleEventRequest'
import type { LifecycleEventUpdateRequest } from './types/LifecycleEventUpdateRequest'
import type { LifecycleEventResponse } from './types/LifecycleEventResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface LifecycleEventController {
  listLifecycleEvent(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<LifecycleEventResponse[]>>>
  createLifecycleEvent(app: FastifyInstance, input: LifecycleEventRequest, request?: FastifyRequest): Promise<LifecycleEventResponse>
  getLifecycleEventById(app: FastifyInstance, request?: FastifyRequest): Promise<LifecycleEventResponse>
  updateLifecycleEvent(app: FastifyInstance, input: LifecycleEventUpdateRequest, request?: FastifyRequest): Promise<LifecycleEventResponse>
  deleteLifecycleEvent(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
