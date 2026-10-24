import type { DunningPolicyRequest } from './types/DunningPolicyRequest'
import type { DunningPolicyUpdateRequest } from './types/DunningPolicyUpdateRequest'
import type { DunningPolicyResponse } from './types/DunningPolicyResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface DunningPolicyController {
  listDunningPolicy(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<DunningPolicyResponse[]>>>
  createDunningPolicy(app: FastifyInstance, input: DunningPolicyRequest, request?: FastifyRequest): Promise<DunningPolicyResponse>
  getDunningPolicyById(app: FastifyInstance, request?: FastifyRequest): Promise<DunningPolicyResponse>
  updateDunningPolicy(app: FastifyInstance, input: DunningPolicyUpdateRequest, request?: FastifyRequest): Promise<DunningPolicyResponse>
  deleteDunningPolicy(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
