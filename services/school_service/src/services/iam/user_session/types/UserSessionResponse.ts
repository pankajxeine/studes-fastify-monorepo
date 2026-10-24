
export type UserSessionResponse = 
{
  id: number
  public_id: string
  record_code: string
  user_session_id: string
  app_user_id: string
  token_hash: string
  campus_id?: (string) | null
  client_type: string
  ip_address?: (string) | null
  user_agent?: (string) | null
  started_at: string
  last_seen_at: string
  expires_at: string
  ended_at?: (string) | null
  end_reason?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
