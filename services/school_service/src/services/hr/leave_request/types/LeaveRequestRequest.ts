
export type LeaveRequestRequest = 
{
  staff_id: string
  leave_type_code: string
  start_date: string
  end_date: string
  is_half_day?: boolean
  half_day_session?: (string) | null
  leave_days: number
  reason: string
  contact_during_leave?: (string) | null
  substitute_staff_id?: (string) | null
  file_id?: (string) | null
  status?: string
  applied_at?: string
  approved_by_user_id?: (string) | null
  decided_at?: (string) | null
  decision_note?: (string) | null
  cancelled_at?: (string) | null
  leave_period?: (string) | null
}
