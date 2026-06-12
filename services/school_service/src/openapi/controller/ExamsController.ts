import type { ExamCreateRequest } from '../types/ExamCreateRequest'
import type { Exam } from '../types/Exam'
import type { ExamList } from '../types/ExamList'
import type { ExamResultCreateRequest } from '../types/ExamResultCreateRequest'
import type { ExamResult } from '../types/ExamResult'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface ExamsController {
  listExams(app: FastifyInstance, request?: FastifyRequest): Promise<ExamList>
  createExam(app: FastifyInstance, input: ExamCreateRequest, request?: FastifyRequest): Promise<Exam>
  recordExamResult(app: FastifyInstance, input: ExamResultCreateRequest, request?: FastifyRequest): Promise<ExamResult>
}
