import type { AssignmentCreateRequest } from './types/AssignmentCreateRequest'
import type { Assignment } from './types/Assignment'
import type { AssignmentList } from './types/AssignmentList'
import type { AssignmentSubmissionCreateRequest } from './types/AssignmentSubmissionCreateRequest'
import type { AssignmentSubmission } from './types/AssignmentSubmission'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { AssignmentsController, ListItem, PaginatedResponse } from './AssignmentsController'

export class AssignmentsService implements AssignmentsController {
      public async listAssignments(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AssignmentList>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async createAssignment(app: FastifyInstance, input: AssignmentCreateRequest, request?: FastifyRequest): Promise<Assignment> {
    try {
      // TODO: implement logic using app + input
      void input;
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async submitAssignment(app: FastifyInstance, input: AssignmentSubmissionCreateRequest, request?: FastifyRequest): Promise<AssignmentSubmission> {
    try {
      // TODO: implement logic using app + input
      void input;
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
