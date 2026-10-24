import type { LateFeeRuleRequest } from './types/LateFeeRuleRequest'
import type { LateFeeRuleUpdateRequest } from './types/LateFeeRuleUpdateRequest'
import type { LateFeeRuleResponse } from './types/LateFeeRuleResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface LateFeeRuleController {
  listLateFeeRule(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<LateFeeRuleResponse[]>>>
  createLateFeeRule(app: FastifyInstance, input: LateFeeRuleRequest, request?: FastifyRequest): Promise<LateFeeRuleResponse>
  getLateFeeRuleById(app: FastifyInstance, request?: FastifyRequest): Promise<LateFeeRuleResponse>
  updateLateFeeRule(app: FastifyInstance, input: LateFeeRuleUpdateRequest, request?: FastifyRequest): Promise<LateFeeRuleResponse>
  deleteLateFeeRule(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
