import type { StudentAttendanceCreateRequest } from '../openapi/types/StudentAttendanceCreateRequest'
import type { StudentAttendance } from '../openapi/types/StudentAttendance'
import type { StaffAttendanceCreateRequest } from '../openapi/types/StaffAttendanceCreateRequest'
import type { StaffAttendance } from '../openapi/types/StaffAttendance'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { AttendanceController } from '../openapi/controller/AttendanceController'

export class AttendanceService implements AttendanceController {
  public async markStudentAttendance(input: StudentAttendanceCreateRequest, headers?: RequestHeaders): Promise<StudentAttendance> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async markStaffAttendance(input: StaffAttendanceCreateRequest, headers?: RequestHeaders): Promise<StaffAttendance> {
    void input
    void headers
    throw new Error('Not implemented')
  }
}
