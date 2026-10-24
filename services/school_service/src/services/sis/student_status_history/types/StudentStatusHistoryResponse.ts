
export type StudentStatusHistoryResponse = 
{
  id: number
  public_id: string
  record_code: string
  student_status_history_id: string
  student_id: string
  from_status?: (string) | null
  to_status: string
  effective_on: string
  reason?: (string) | null
  changed_by_user_id?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
