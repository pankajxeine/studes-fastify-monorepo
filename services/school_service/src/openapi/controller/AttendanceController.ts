import type { StudentAttendanceCreateRequest } from '../types/StudentAttendanceCreateRequest'
import type { StudentAttendance } from '../types/StudentAttendance'
import type { StaffAttendanceCreateRequest } from '../types/StaffAttendanceCreateRequest'
import type { StaffAttendance } from '../types/StaffAttendance'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface AttendanceController {
  markStudentAttendance(input: StudentAttendanceCreateRequest, headers?: RequestHeaders): Promise<StudentAttendance>
  markStaffAttendance(input: StaffAttendanceCreateRequest, headers?: RequestHeaders): Promise<StaffAttendance>
}
