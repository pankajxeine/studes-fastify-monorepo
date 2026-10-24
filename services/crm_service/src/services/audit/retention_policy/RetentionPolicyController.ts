import type { RetentionPolicyRequest } from './types/RetentionPolicyRequest'
import type { RetentionPolicyUpdateRequest } from './types/RetentionPolicyUpdateRequest'
import type { RetentionPolicyResponse } from './types/RetentionPolicyResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface RetentionPolicyController {
  listRetentionPolicy(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<RetentionPolicyResponse[]>>>
  createRetentionPolicy(app: FastifyInstance, input: RetentionPolicyRequest, request?: FastifyRequest): Promise<RetentionPolicyResponse>
  getRetentionPolicyById(app: FastifyInstance, request?: FastifyRequest): Promise<RetentionPolicyResponse>
  updateRetentionPolicy(app: FastifyInstance, input: RetentionPolicyUpdateRequest, request?: FastifyRequest): Promise<RetentionPolicyResponse>
  deleteRetentionPolicy(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
