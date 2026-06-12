import type { StudentAttendanceCreateRequest } from '../openapi/types/StudentAttendanceCreateRequest'
import type { StudentAttendance } from '../openapi/types/StudentAttendance'
import type { StaffAttendanceCreateRequest } from '../openapi/types/StaffAttendanceCreateRequest'
import type { StaffAttendance } from '../openapi/types/StaffAttendance'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { AttendanceController } from '../openapi/controller/AttendanceController'

export class AttendanceService implements AttendanceController {
  public async markStudentAttendance(app: FastifyInstance, input: StudentAttendanceCreateRequest, request?: FastifyRequest): Promise<StudentAttendance> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async markStaffAttendance(app: FastifyInstance, input: StaffAttendanceCreateRequest, request?: FastifyRequest): Promise<StaffAttendance> {
    void input
    void request
    throw new Error('Not implemented')
  }
}
