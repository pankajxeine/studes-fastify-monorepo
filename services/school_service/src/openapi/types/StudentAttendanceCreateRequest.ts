export type StudentAttendanceCreateRequest = 
{
  student_id: string
  session_id: string
  attendance_date: string
  status: "present" | "absent" | "late" | "excused"
  remark?: string
}
