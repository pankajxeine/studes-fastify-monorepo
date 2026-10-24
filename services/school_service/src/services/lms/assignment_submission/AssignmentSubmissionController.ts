import type { AssignmentSubmissionRequest } from './types/AssignmentSubmissionRequest'
import type { AssignmentSubmissionUpdateRequest } from './types/AssignmentSubmissionUpdateRequest'
import type { AssignmentSubmissionResponse } from './types/AssignmentSubmissionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface AssignmentSubmissionController {
  listAssignmentSubmission(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AssignmentSubmissionResponse[]>>>
  createAssignmentSubmission(app: FastifyInstance, input: AssignmentSubmissionRequest, request?: FastifyRequest): Promise<AssignmentSubmissionResponse>
  getAssignmentSubmissionById(app: FastifyInstance, request?: FastifyRequest): Promise<AssignmentSubmissionResponse>
  updateAssignmentSubmission(app: FastifyInstance, input: AssignmentSubmissionUpdateRequest, request?: FastifyRequest): Promise<AssignmentSubmissionResponse>
  deleteAssignmentSubmission(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
