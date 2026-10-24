import type { StudentEnrollmentRequest } from './types/StudentEnrollmentRequest'
import type { StudentEnrollmentUpdateRequest } from './types/StudentEnrollmentUpdateRequest'
import type { StudentEnrollmentResponse } from './types/StudentEnrollmentResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface StudentEnrollmentController {
  listStudentEnrollment(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<StudentEnrollmentResponse[]>>>
  createStudentEnrollment(app: FastifyInstance, input: StudentEnrollmentRequest, request?: FastifyRequest): Promise<StudentEnrollmentResponse>
  getStudentEnrollmentById(app: FastifyInstance, request?: FastifyRequest): Promise<StudentEnrollmentResponse>
  updateStudentEnrollment(app: FastifyInstance, input: StudentEnrollmentUpdateRequest, request?: FastifyRequest): Promise<StudentEnrollmentResponse>
  deleteStudentEnrollment(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
