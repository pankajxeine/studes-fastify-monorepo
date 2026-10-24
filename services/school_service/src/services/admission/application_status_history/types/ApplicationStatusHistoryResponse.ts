
export type ApplicationStatusHistoryResponse = 
{
  id: number
  public_id: string
  record_code: string
  application_status_history_id: string
  application_id: string
  from_status?: (string) | null
  to_status: string
  changed_at: string
  changed_by_user_id?: (string) | null
  remarks?: (string) | null
  created_at: string
  created_by?: (string) | null
}
