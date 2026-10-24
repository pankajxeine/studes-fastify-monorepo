
export type StudentAttendanceRequest = 
{
  student_attendance_session_id: string
  student_id: string
  attendance_type_code: string
  minutes_late?: (number) | null
  student_leave_request_id?: (string) | null
  remarks?: (string) | null
  marked_by_user_id?: (string) | null
  marked_at?: string
  correction_reason?: (string) | null
  corrected_at?: (string) | null
}
