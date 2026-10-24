
export type SubstitutionRequest = 
{
  timetable_entry_id: string
  substitution_date: string
  substitute_staff_id?: (string) | null
  substitute_room_id?: (string) | null
  is_class_cancelled?: boolean
  reason: string
  leave_request_id?: (string) | null
  status?: string
  requested_by_user_id?: (string) | null
  approved_by_user_id?: (string) | null
  approved_at?: (string) | null
  notes?: (string) | null
}
