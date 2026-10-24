
export type ApplicationStatusHistoryUpdateRequest = 
{
  application_id: string
  from_status: (string) | null
  to_status: string
  changed_at: string
  changed_by_user_id: (string) | null
  remarks: (string) | null
}
