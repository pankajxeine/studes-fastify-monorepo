
export type UserSessionRequest = 
{
  app_user_id: string
  token_hash: string
  campus_id?: (string) | null
  client_type?: string
  ip_address?: (string) | null
  user_agent?: (string) | null
  started_at?: string
  last_seen_at?: string
  expires_at: string
  ended_at?: (string) | null
  end_reason?: (string) | null
}
