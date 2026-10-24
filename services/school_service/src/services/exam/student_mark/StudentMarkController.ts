import type { StudentMarkRequest } from './types/StudentMarkRequest'
import type { StudentMarkUpdateRequest } from './types/StudentMarkUpdateRequest'
import type { StudentMarkResponse } from './types/StudentMarkResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface StudentMarkController {
  listStudentMark(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<StudentMarkResponse[]>>>
  createStudentMark(app: FastifyInstance, input: StudentMarkRequest, request?: FastifyRequest): Promise<StudentMarkResponse>
  getStudentMarkById(app: FastifyInstance, request?: FastifyRequest): Promise<StudentMarkResponse>
  updateStudentMark(app: FastifyInstance, input: StudentMarkUpdateRequest, request?: FastifyRequest): Promise<StudentMarkResponse>
  deleteStudentMark(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
