import type { SlaPolicyRequest } from './types/SlaPolicyRequest'
import type { SlaPolicyUpdateRequest } from './types/SlaPolicyUpdateRequest'
import type { SlaPolicyResponse } from './types/SlaPolicyResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface SlaPolicyController {
  listSlaPolicy(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SlaPolicyResponse[]>>>
  createSlaPolicy(app: FastifyInstance, input: SlaPolicyRequest, request?: FastifyRequest): Promise<SlaPolicyResponse>
  getSlaPolicyById(app: FastifyInstance, request?: FastifyRequest): Promise<SlaPolicyResponse>
  updateSlaPolicy(app: FastifyInstance, input: SlaPolicyUpdateRequest, request?: FastifyRequest): Promise<SlaPolicyResponse>
  deleteSlaPolicy(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
