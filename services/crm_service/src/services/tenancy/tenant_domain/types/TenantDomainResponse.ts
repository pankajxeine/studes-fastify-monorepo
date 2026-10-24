
export type TenantDomainResponse = 
{
  id: number
  public_id: string
  record_code: string
  tenant_domain_id: string
  tenant_application_id: string
  hostname: string
  kind: string
  is_primary: boolean
  verification_token?: (string) | null
  verified_at?: (string) | null
  tls_status: string
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
