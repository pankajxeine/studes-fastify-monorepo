import type { StudentConcessionRequest } from './types/StudentConcessionRequest'
import type { StudentConcessionUpdateRequest } from './types/StudentConcessionUpdateRequest'
import type { StudentConcessionResponse } from './types/StudentConcessionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface StudentConcessionController {
  listStudentConcession(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<StudentConcessionResponse[]>>>
  createStudentConcession(app: FastifyInstance, input: StudentConcessionRequest, request?: FastifyRequest): Promise<StudentConcessionResponse>
  getStudentConcessionById(app: FastifyInstance, request?: FastifyRequest): Promise<StudentConcessionResponse>
  updateStudentConcession(app: FastifyInstance, input: StudentConcessionUpdateRequest, request?: FastifyRequest): Promise<StudentConcessionResponse>
  deleteStudentConcession(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
