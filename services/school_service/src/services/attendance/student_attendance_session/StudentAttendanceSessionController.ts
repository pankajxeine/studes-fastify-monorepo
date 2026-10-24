import type { StudentAttendanceSessionRequest } from './types/StudentAttendanceSessionRequest'
import type { StudentAttendanceSessionUpdateRequest } from './types/StudentAttendanceSessionUpdateRequest'
import type { StudentAttendanceSessionResponse } from './types/StudentAttendanceSessionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface StudentAttendanceSessionController {
  listStudentAttendanceSession(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<StudentAttendanceSessionResponse[]>>>
  createStudentAttendanceSession(app: FastifyInstance, input: StudentAttendanceSessionRequest, request?: FastifyRequest): Promise<StudentAttendanceSessionResponse>
  getStudentAttendanceSessionById(app: FastifyInstance, request?: FastifyRequest): Promise<StudentAttendanceSessionResponse>
  updateStudentAttendanceSession(app: FastifyInstance, input: StudentAttendanceSessionUpdateRequest, request?: FastifyRequest): Promise<StudentAttendanceSessionResponse>
  deleteStudentAttendanceSession(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
