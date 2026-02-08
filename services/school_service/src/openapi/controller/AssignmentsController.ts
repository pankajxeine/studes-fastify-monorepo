import type { AssignmentCreateRequest } from '../types/AssignmentCreateRequest'
import type { Assignment } from '../types/Assignment'
import type { AssignmentList } from '../types/AssignmentList'
import type { AssignmentSubmissionCreateRequest } from '../types/AssignmentSubmissionCreateRequest'
import type { AssignmentSubmission } from '../types/AssignmentSubmission'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface AssignmentsController {
  listAssignments(headers?: RequestHeaders): Promise<AssignmentList>
  createAssignment(input: AssignmentCreateRequest, headers?: RequestHeaders): Promise<Assignment>
  submitAssignment(input: AssignmentSubmissionCreateRequest, headers?: RequestHeaders): Promise<AssignmentSubmission>
}
