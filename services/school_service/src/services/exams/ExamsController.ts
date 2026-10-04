import type { ExamCreateRequest } from './types/ExamCreateRequest'
import type { Exam } from './types/Exam'
import type { ExamList } from './types/ExamList'
import type { ExamResultCreateRequest } from './types/ExamResultCreateRequest'
import type { ExamResult } from './types/ExamResult'
import { FastifyInstance, FastifyRequest } from 'fastify'

export type ListItem<T> = T extends (infer Item)[] ? Item : T

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface ExamsController {
  listExams(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ExamList>>>
  createExam(app: FastifyInstance, input: ExamCreateRequest, request?: FastifyRequest): Promise<Exam>
  recordExamResult(app: FastifyInstance, input: ExamResultCreateRequest, request?: FastifyRequest): Promise<ExamResult>
}
