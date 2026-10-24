
export type StudentLeaveRequestUpdateRequest = 
{
  student_id: string
  requested_by_person_id: string
  from_date: string
  to_date: string
  leave_period: (string) | null
  is_half_day: boolean
  reason: string
  is_medical: boolean
  file_id: (string) | null
  status: string
  submitted_at: string
  reviewed_by_user_id: (string) | null
  reviewed_at: (string) | null
  review_note: (string) | null
}
