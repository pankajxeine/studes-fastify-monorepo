import type { EscalationRuleRequest } from './types/EscalationRuleRequest'
import type { EscalationRuleUpdateRequest } from './types/EscalationRuleUpdateRequest'
import type { EscalationRuleResponse } from './types/EscalationRuleResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface EscalationRuleController {
  listEscalationRule(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<EscalationRuleResponse[]>>>
  createEscalationRule(app: FastifyInstance, input: EscalationRuleRequest, request?: FastifyRequest): Promise<EscalationRuleResponse>
  getEscalationRuleById(app: FastifyInstance, request?: FastifyRequest): Promise<EscalationRuleResponse>
  updateEscalationRule(app: FastifyInstance, input: EscalationRuleUpdateRequest, request?: FastifyRequest): Promise<EscalationRuleResponse>
  deleteEscalationRule(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
