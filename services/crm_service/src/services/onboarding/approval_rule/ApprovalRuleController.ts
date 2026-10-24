import type { ApprovalRuleRequest } from './types/ApprovalRuleRequest'
import type { ApprovalRuleUpdateRequest } from './types/ApprovalRuleUpdateRequest'
import type { ApprovalRuleResponse } from './types/ApprovalRuleResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ApprovalRuleController {
  listApprovalRule(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ApprovalRuleResponse[]>>>
  createApprovalRule(app: FastifyInstance, input: ApprovalRuleRequest, request?: FastifyRequest): Promise<ApprovalRuleResponse>
  getApprovalRuleById(app: FastifyInstance, request?: FastifyRequest): Promise<ApprovalRuleResponse>
  updateApprovalRule(app: FastifyInstance, input: ApprovalRuleUpdateRequest, request?: FastifyRequest): Promise<ApprovalRuleResponse>
  deleteApprovalRule(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
