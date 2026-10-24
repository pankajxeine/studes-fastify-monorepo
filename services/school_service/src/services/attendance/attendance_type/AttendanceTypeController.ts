import type { AttendanceTypeRequest } from './types/AttendanceTypeRequest'
import type { AttendanceTypeUpdateRequest } from './types/AttendanceTypeUpdateRequest'
import type { AttendanceTypeResponse } from './types/AttendanceTypeResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface AttendanceTypeController {
  listAttendanceType(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AttendanceTypeResponse[]>>>
  createAttendanceType(app: FastifyInstance, input: AttendanceTypeRequest, request?: FastifyRequest): Promise<AttendanceTypeResponse>
  getAttendanceTypeById(app: FastifyInstance, request?: FastifyRequest): Promise<AttendanceTypeResponse>
  updateAttendanceType(app: FastifyInstance, input: AttendanceTypeUpdateRequest, request?: FastifyRequest): Promise<AttendanceTypeResponse>
  deleteAttendanceType(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
