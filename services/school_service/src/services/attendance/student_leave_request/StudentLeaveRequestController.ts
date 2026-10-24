import type { StudentLeaveRequestRequest } from './types/StudentLeaveRequestRequest'
import type { StudentLeaveRequestUpdateRequest } from './types/StudentLeaveRequestUpdateRequest'
import type { StudentLeaveRequestResponse } from './types/StudentLeaveRequestResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface StudentLeaveRequestController {
  listStudentLeaveRequest(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<StudentLeaveRequestResponse[]>>>
  createStudentLeaveRequest(app: FastifyInstance, input: StudentLeaveRequestRequest, request?: FastifyRequest): Promise<StudentLeaveRequestResponse>
  getStudentLeaveRequestById(app: FastifyInstance, request?: FastifyRequest): Promise<StudentLeaveRequestResponse>
  updateStudentLeaveRequest(app: FastifyInstance, input: StudentLeaveRequestUpdateRequest, request?: FastifyRequest): Promise<StudentLeaveRequestResponse>
  deleteStudentLeaveRequest(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
