import type { CommissionRuleRequest } from './types/CommissionRuleRequest'
import type { CommissionRuleUpdateRequest } from './types/CommissionRuleUpdateRequest'
import type { CommissionRuleResponse } from './types/CommissionRuleResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface CommissionRuleController {
  listCommissionRule(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CommissionRuleResponse[]>>>
  createCommissionRule(app: FastifyInstance, input: CommissionRuleRequest, request?: FastifyRequest): Promise<CommissionRuleResponse>
  getCommissionRuleById(app: FastifyInstance, request?: FastifyRequest): Promise<CommissionRuleResponse>
  updateCommissionRule(app: FastifyInstance, input: CommissionRuleUpdateRequest, request?: FastifyRequest): Promise<CommissionRuleResponse>
  deleteCommissionRule(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
