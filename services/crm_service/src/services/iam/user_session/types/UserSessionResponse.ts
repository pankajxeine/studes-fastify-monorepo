
export type UserSessionResponse = 
{
  id: number
  public_id: string
  record_code: string
  user_session_id: string
  app_user_id: string
  token_hash: string
  scope_type: string
  scope_id?: (string) | null
  auth_method: string
  mfa_verified_at?: (string) | null
  impersonating_tenant_id?: (string) | null
  impersonation_reason?: (string) | null
  client_type: string
  ip_address?: (string) | null
  user_agent?: (string) | null
  started_at: string
  last_seen_at: string
  idle_expires_at: string
  expires_at: string
  ended_at?: (string) | null
  end_reason?: (string) | null
}
