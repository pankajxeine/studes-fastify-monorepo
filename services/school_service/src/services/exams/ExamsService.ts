import type { ExamCreateRequest } from './types/ExamCreateRequest'
import type { Exam } from './types/Exam'
import type { ExamList } from './types/ExamList'
import type { ExamResultCreateRequest } from './types/ExamResultCreateRequest'
import type { ExamResult } from './types/ExamResult'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { ExamsController, ListItem, PaginatedResponse } from './ExamsController'

export class ExamsService implements ExamsController {
      public async listExams(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ExamList>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async createExam(app: FastifyInstance, input: ExamCreateRequest, request?: FastifyRequest): Promise<Exam> {
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

      public async recordExamResult(app: FastifyInstance, input: ExamResultCreateRequest, request?: FastifyRequest): Promise<ExamResult> {
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
