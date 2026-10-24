import type { StudentRequest } from './types/StudentRequest'
import type { StudentUpdateRequest } from './types/StudentUpdateRequest'
import type { StudentResponse } from './types/StudentResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface StudentController {
  listStudent(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<StudentResponse[]>>>
  createStudent(app: FastifyInstance, input: StudentRequest, request?: FastifyRequest): Promise<StudentResponse>
  getStudentById(app: FastifyInstance, request?: FastifyRequest): Promise<StudentResponse>
  updateStudent(app: FastifyInstance, input: StudentUpdateRequest, request?: FastifyRequest): Promise<StudentResponse>
  deleteStudent(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
