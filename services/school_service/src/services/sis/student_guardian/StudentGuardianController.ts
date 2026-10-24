import type { StudentGuardianRequest } from './types/StudentGuardianRequest'
import type { StudentGuardianUpdateRequest } from './types/StudentGuardianUpdateRequest'
import type { StudentGuardianResponse } from './types/StudentGuardianResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface StudentGuardianController {
  listStudentGuardian(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<StudentGuardianResponse[]>>>
  createStudentGuardian(app: FastifyInstance, input: StudentGuardianRequest, request?: FastifyRequest): Promise<StudentGuardianResponse>
  getStudentGuardianById(app: FastifyInstance, request?: FastifyRequest): Promise<StudentGuardianResponse>
  updateStudentGuardian(app: FastifyInstance, input: StudentGuardianUpdateRequest, request?: FastifyRequest): Promise<StudentGuardianResponse>
  deleteStudentGuardian(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
