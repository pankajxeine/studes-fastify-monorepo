import type { AssignmentCreateRequest } from '../types/AssignmentCreateRequest'
import type { Assignment } from '../types/Assignment'
import type { AssignmentList } from '../types/AssignmentList'
import type { AssignmentSubmissionCreateRequest } from '../types/AssignmentSubmissionCreateRequest'
import type { AssignmentSubmission } from '../types/AssignmentSubmission'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface AssignmentsController {
  listAssignments(app: FastifyInstance, request?: FastifyRequest): Promise<AssignmentList>
  createAssignment(app: FastifyInstance, input: AssignmentCreateRequest, request?: FastifyRequest): Promise<Assignment>
  submitAssignment(app: FastifyInstance, input: AssignmentSubmissionCreateRequest, request?: FastifyRequest): Promise<AssignmentSubmission>
}
