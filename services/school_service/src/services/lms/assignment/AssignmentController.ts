import type { AssignmentRequest } from './types/AssignmentRequest'
import type { AssignmentUpdateRequest } from './types/AssignmentUpdateRequest'
import type { AssignmentResponse } from './types/AssignmentResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface AssignmentController {
  listAssignment(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AssignmentResponse[]>>>
  createAssignment(app: FastifyInstance, input: AssignmentRequest, request?: FastifyRequest): Promise<AssignmentResponse>
  getAssignmentById(app: FastifyInstance, request?: FastifyRequest): Promise<AssignmentResponse>
  updateAssignment(app: FastifyInstance, input: AssignmentUpdateRequest, request?: FastifyRequest): Promise<AssignmentResponse>
  deleteAssignment(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
