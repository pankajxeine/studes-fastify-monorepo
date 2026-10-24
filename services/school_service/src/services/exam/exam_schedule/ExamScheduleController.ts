import type { ExamScheduleRequest } from './types/ExamScheduleRequest'
import type { ExamScheduleUpdateRequest } from './types/ExamScheduleUpdateRequest'
import type { ExamScheduleResponse } from './types/ExamScheduleResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ExamScheduleController {
  listExamSchedule(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ExamScheduleResponse[]>>>
  createExamSchedule(app: FastifyInstance, input: ExamScheduleRequest, request?: FastifyRequest): Promise<ExamScheduleResponse>
  getExamScheduleById(app: FastifyInstance, request?: FastifyRequest): Promise<ExamScheduleResponse>
  updateExamSchedule(app: FastifyInstance, input: ExamScheduleUpdateRequest, request?: FastifyRequest): Promise<ExamScheduleResponse>
  deleteExamSchedule(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
