import type { ExamCreateRequest } from '../openapi/types/ExamCreateRequest'
import type { Exam } from '../openapi/types/Exam'
import type { ExamList } from '../openapi/types/ExamList'
import type { ExamResultCreateRequest } from '../openapi/types/ExamResultCreateRequest'
import type { ExamResult } from '../openapi/types/ExamResult'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { ExamsController } from '../openapi/controller/ExamsController'

export class ExamsService implements ExamsController {
  public async listExams(app: FastifyInstance,request?: FastifyRequest): Promise<ExamList> {
    void request
    throw new Error('Not implemented')
  }

  public async createExam(app: FastifyInstance, input: ExamCreateRequest, request?: FastifyRequest): Promise<Exam> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async recordExamResult(app: FastifyInstance, input: ExamResultCreateRequest, request?: FastifyRequest): Promise<ExamResult> {
    void input
    void request
    throw new Error('Not implemented')
  }
}
