
export type StudentStatusHistoryUpdateRequest = 
{
  student_id: string
  from_status: (string) | null
  to_status: string
  effective_on: string
  reason: (string) | null
  changed_by_user_id: (string) | null
}
