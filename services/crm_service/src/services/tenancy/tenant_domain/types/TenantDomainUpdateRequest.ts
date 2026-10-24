
export type TenantDomainUpdateRequest = 
{
  tenant_application_id: string
  hostname: string
  kind: string
  is_primary: boolean
  verification_token: (string) | null
  verified_at: (string) | null
  tls_status: string
}
