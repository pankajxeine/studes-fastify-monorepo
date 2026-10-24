
export type StaffAttendanceResponse = 
{
  id: number
  public_id: string
  record_code: string
  staff_attendance_id: string
  staff_id: string
  campus_id: string
  attendance_date: string
  attendance_type_code: string
  check_in_at?: (string) | null
  check_out_at?: (string) | null
  worked_minutes?: (number) | null
  capture_method: "manual" | "biometric" | "rfid" | "mobile_app" | "import"
  leave_request_id?: (string) | null
  marked_by_user_id?: (string) | null
  remarks?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
