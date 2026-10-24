
export type StudentAttendanceSessionUpdateRequest = 
{
  campus_id: string
  section_id: (string) | null
  course_offering_id: (string) | null
  session_date: string
  period_id: (string) | null
  timetable_entry_id: (string) | null
  taken_by_staff_id: string
  status: "open" | "submitted" | "locked"
  opened_at: string
  submitted_at: (string) | null
  locked_at: (string) | null
  locked_by_user_id: (string) | null
  marked_count: number
  present_count: number
  absent_count: number
  late_count: number
  excused_count: number
  remarks: (string) | null
}
