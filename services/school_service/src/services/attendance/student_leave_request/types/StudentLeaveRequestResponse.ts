
export type StudentLeaveRequestResponse = 
{
  id: number
  public_id: string
  record_code: string
  student_leave_request_id: string
  student_id: string
  requested_by_person_id: string
  from_date: string
  to_date: string
  leave_period?: (string) | null
  is_half_day: boolean
  reason: string
  is_medical: boolean
  file_id?: (string) | null
  status: string
  submitted_at: string
  reviewed_by_user_id?: (string) | null
  reviewed_at?: (string) | null
  review_note?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
