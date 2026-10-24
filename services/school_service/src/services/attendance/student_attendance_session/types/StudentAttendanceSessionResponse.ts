
export type StudentAttendanceSessionResponse = 
{
  id: number
  public_id: string
  record_code: string
  student_attendance_session_id: string
  campus_id: string
  section_id?: (string) | null
  course_offering_id?: (string) | null
  session_date: string
  period_id?: (string) | null
  timetable_entry_id?: (string) | null
  taken_by_staff_id: string
  status: "open" | "submitted" | "locked"
  opened_at: string
  submitted_at?: (string) | null
  locked_at?: (string) | null
  locked_by_user_id?: (string) | null
  marked_count: number
  present_count: number
  absent_count: number
  late_count: number
  excused_count: number
  remarks?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
