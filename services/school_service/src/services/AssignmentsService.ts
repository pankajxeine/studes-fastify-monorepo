import type { AssignmentCreateRequest } from '../openapi/types/AssignmentCreateRequest'
import type { Assignment } from '../openapi/types/Assignment'
import type { AssignmentList } from '../openapi/types/AssignmentList'
import type { AssignmentSubmissionCreateRequest } from '../openapi/types/AssignmentSubmissionCreateRequest'
import type { AssignmentSubmission } from '../openapi/types/AssignmentSubmission'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { AssignmentsController } from '../openapi/controller/AssignmentsController'

export class AssignmentsService implements AssignmentsController {
  public async listAssignments(headers?: RequestHeaders): Promise<AssignmentList> {
    void headers
    throw new Error('Not implemented')
  }

  public async createAssignment(input: AssignmentCreateRequest, headers?: RequestHeaders): Promise<Assignment> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async submitAssignment(input: AssignmentSubmissionCreateRequest, headers?: RequestHeaders): Promise<AssignmentSubmission> {
    void input
    void headers
    throw new Error('Not implemented')
  }
}
