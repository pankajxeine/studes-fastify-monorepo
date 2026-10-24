import type { StudentAttendanceRequest } from './types/StudentAttendanceRequest'
import type { StudentAttendanceUpdateRequest } from './types/StudentAttendanceUpdateRequest'
import type { StudentAttendanceResponse } from './types/StudentAttendanceResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface StudentAttendanceController {
  listStudentAttendance(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<StudentAttendanceResponse[]>>>
  createStudentAttendance(app: FastifyInstance, input: StudentAttendanceRequest, request?: FastifyRequest): Promise<StudentAttendanceResponse>
  getStudentAttendanceById(app: FastifyInstance, request?: FastifyRequest): Promise<StudentAttendanceResponse>
  updateStudentAttendance(app: FastifyInstance, input: StudentAttendanceUpdateRequest, request?: FastifyRequest): Promise<StudentAttendanceResponse>
  deleteStudentAttendance(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
