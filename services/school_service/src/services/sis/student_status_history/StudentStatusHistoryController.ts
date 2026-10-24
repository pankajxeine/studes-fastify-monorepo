import type { StudentStatusHistoryRequest } from './types/StudentStatusHistoryRequest'
import type { StudentStatusHistoryUpdateRequest } from './types/StudentStatusHistoryUpdateRequest'
import type { StudentStatusHistoryResponse } from './types/StudentStatusHistoryResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface StudentStatusHistoryController {
  listStudentStatusHistory(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<StudentStatusHistoryResponse[]>>>
  createStudentStatusHistory(app: FastifyInstance, input: StudentStatusHistoryRequest, request?: FastifyRequest): Promise<StudentStatusHistoryResponse>
  getStudentStatusHistoryById(app: FastifyInstance, request?: FastifyRequest): Promise<StudentStatusHistoryResponse>
  updateStudentStatusHistory(app: FastifyInstance, input: StudentStatusHistoryUpdateRequest, request?: FastifyRequest): Promise<StudentStatusHistoryResponse>
  deleteStudentStatusHistory(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
