import type { ExamRequest } from './types/ExamRequest'
import type { ExamUpdateRequest } from './types/ExamUpdateRequest'
import type { ExamResponse } from './types/ExamResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ExamController {
  listExam(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ExamResponse[]>>>
  createExam(app: FastifyInstance, input: ExamRequest, request?: FastifyRequest): Promise<ExamResponse>
  getExamById(app: FastifyInstance, request?: FastifyRequest): Promise<ExamResponse>
  updateExam(app: FastifyInstance, input: ExamUpdateRequest, request?: FastifyRequest): Promise<ExamResponse>
  deleteExam(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
