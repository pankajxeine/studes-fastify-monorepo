
export type ApiClientRequest = 
{
  name: string
  tenant_application_id?: (string) | null
  application_id?: (string) | null
  client_key: string
  secret_hash: string
  scopes?: string
  ip_allowlist?: (string) | null
  expires_at?: (string) | null
  last_used_at?: (string) | null
  revoked_at?: (string) | null
}
