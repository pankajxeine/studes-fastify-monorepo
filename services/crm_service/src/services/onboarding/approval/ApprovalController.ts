import type { ApprovalRequest } from './types/ApprovalRequest'
import type { ApprovalUpdateRequest } from './types/ApprovalUpdateRequest'
import type { ApprovalResponse } from './types/ApprovalResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ApprovalController {
  listApproval(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ApprovalResponse[]>>>
  createApproval(app: FastifyInstance, input: ApprovalRequest, request?: FastifyRequest): Promise<ApprovalResponse>
  getApprovalById(app: FastifyInstance, request?: FastifyRequest): Promise<ApprovalResponse>
  updateApproval(app: FastifyInstance, input: ApprovalUpdateRequest, request?: FastifyRequest): Promise<ApprovalResponse>
  deleteApproval(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
