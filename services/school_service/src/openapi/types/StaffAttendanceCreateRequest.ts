export type StaffAttendanceCreateRequest = 
{
  staff_person_id: string
  attendance_date: string
  status: "present" | "absent" | "late" | "excused"
  remark?: string
}
