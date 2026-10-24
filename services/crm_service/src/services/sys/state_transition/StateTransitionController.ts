import type { StateTransitionRequest } from './types/StateTransitionRequest'
import type { StateTransitionUpdateRequest } from './types/StateTransitionUpdateRequest'
import type { StateTransitionResponse } from './types/StateTransitionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface StateTransitionController {
  listStateTransition(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<StateTransitionResponse[]>>>
  createStateTransition(app: FastifyInstance, input: StateTransitionRequest, request?: FastifyRequest): Promise<StateTransitionResponse>
  getStateTransitionById(app: FastifyInstance, request?: FastifyRequest): Promise<StateTransitionResponse>
  updateStateTransition(app: FastifyInstance, input: StateTransitionUpdateRequest, request?: FastifyRequest): Promise<StateTransitionResponse>
  deleteStateTransition(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
