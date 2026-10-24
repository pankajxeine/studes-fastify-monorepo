
export type SubstitutionResponse = 
{
  id: number
  public_id: string
  record_code: string
  substitution_id: string
  timetable_entry_id: string
  substitution_date: string
  substitute_staff_id?: (string) | null
  substitute_room_id?: (string) | null
  is_class_cancelled: boolean
  reason: string
  leave_request_id?: (string) | null
  status: string
  requested_by_user_id?: (string) | null
  approved_by_user_id?: (string) | null
  approved_at?: (string) | null
  notes?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
