import type { AssignmentCreateRequest } from '../openapi/types/AssignmentCreateRequest'
import type { Assignment } from '../openapi/types/Assignment'
import type { AssignmentList } from '../openapi/types/AssignmentList'
import type { AssignmentSubmissionCreateRequest } from '../openapi/types/AssignmentSubmissionCreateRequest'
import type { AssignmentSubmission } from '../openapi/types/AssignmentSubmission'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { AssignmentsController } from '../openapi/controller/AssignmentsController'

export class AssignmentsService implements AssignmentsController {
  public async listAssignments(app: FastifyInstance,request?: FastifyRequest): Promise<AssignmentList> {
    void request
    throw new Error('Not implemented')
  }

  public async createAssignment(app: FastifyInstance, input: AssignmentCreateRequest, request?: FastifyRequest): Promise<Assignment> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async submitAssignment(app: FastifyInstance, input: AssignmentSubmissionCreateRequest, request?: FastifyRequest): Promise<AssignmentSubmission> {
    void input
    void request
    throw new Error('Not implemented')
  }
}
