import type { StudentAttendanceCreateRequest } from '../types/StudentAttendanceCreateRequest'
import type { StudentAttendance } from '../types/StudentAttendance'
import type { StaffAttendanceCreateRequest } from '../types/StaffAttendanceCreateRequest'
import type { StaffAttendance } from '../types/StaffAttendance'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface AttendanceController {
  markStudentAttendance(app: FastifyInstance, input: StudentAttendanceCreateRequest, request?: FastifyRequest): Promise<StudentAttendance>
  markStaffAttendance(app: FastifyInstance, input: StaffAttendanceCreateRequest, request?: FastifyRequest): Promise<StaffAttendance>
}
