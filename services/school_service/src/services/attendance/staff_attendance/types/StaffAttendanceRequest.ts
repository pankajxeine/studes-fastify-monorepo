
export type StaffAttendanceRequest = 
{
  staff_id: string
  campus_id: string
  attendance_date: string
  attendance_type_code: string
  check_in_at?: (string) | null
  check_out_at?: (string) | null
  worked_minutes?: (number) | null
  capture_method?: "manual" | "biometric" | "rfid" | "mobile_app" | "import"
  leave_request_id?: (string) | null
  marked_by_user_id?: (string) | null
  remarks?: (string) | null
}
