
export type DisciplinaryActionResponse = 
{
  id: number
  public_id: string
  record_code: string
  disciplinary_action_id: string
  incident_party_id: string
  action_type: string
  start_date: string
  end_date?: (string) | null
  details?: (string) | null
  issued_by_user_id: string
  issued_at: string
  guardian_informed_at?: (string) | null
  status: "pending" | "active" | "completed" | "revoked"
  revoked_reason?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
