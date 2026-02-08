import type { ExamCreateRequest } from '../types/ExamCreateRequest'
import type { Exam } from '../types/Exam'
import type { ExamList } from '../types/ExamList'
import type { ExamResultCreateRequest } from '../types/ExamResultCreateRequest'
import type { ExamResult } from '../types/ExamResult'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface ExamsController {
  listExams(headers?: RequestHeaders): Promise<ExamList>
  createExam(input: ExamCreateRequest, headers?: RequestHeaders): Promise<Exam>
  recordExamResult(input: ExamResultCreateRequest, headers?: RequestHeaders): Promise<ExamResult>
}
