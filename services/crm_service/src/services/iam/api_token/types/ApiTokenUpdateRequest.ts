
export type ApiTokenUpdateRequest = 
{
  app_user_id: string
  name: string
  token_prefix: string
  secret_hash: string
  permission_codes: string
  ip_allowlist: (string) | null
  expires_at: string
  last_used_at: (string) | null
  last_used_ip: (string) | null
  revoked_at: (string) | null
  revoked_by_user_id: (string) | null
}
