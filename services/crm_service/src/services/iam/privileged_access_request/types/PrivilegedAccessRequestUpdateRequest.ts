
export type PrivilegedAccessRequestUpdateRequest = 
{
  app_user_id: string
  role_code: string
  scope_type: string
  scope_id: (string) | null
  justification: string
  ticket_ref: (string) | null
  requested_minutes: number
  status: string
  decided_by_user_id: (string) | null
  decided_at: (string) | null
  decision_note: (string) | null
  requested_at: string
}
