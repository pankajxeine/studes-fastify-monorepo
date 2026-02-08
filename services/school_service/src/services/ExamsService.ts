import type { ExamCreateRequest } from '../openapi/types/ExamCreateRequest'
import type { Exam } from '../openapi/types/Exam'
import type { ExamList } from '../openapi/types/ExamList'
import type { ExamResultCreateRequest } from '../openapi/types/ExamResultCreateRequest'
import type { ExamResult } from '../openapi/types/ExamResult'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { ExamsController } from '../openapi/controller/ExamsController'

export class ExamsService implements ExamsController {
  public async listExams(headers?: RequestHeaders): Promise<ExamList> {
    void headers
    throw new Error('Not implemented')
  }

  public async createExam(input: ExamCreateRequest, headers?: RequestHeaders): Promise<Exam> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async recordExamResult(input: ExamResultCreateRequest, headers?: RequestHeaders): Promise<ExamResult> {
    void input
    void headers
    throw new Error('Not implemented')
  }
}
