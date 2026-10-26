
export type TenantDomainUpdateRequest = 
{
  tenant_application_id: string
  hostname: string
  application_type: string
  kind: string
  is_primary: boolean
  verification_token: (string) | null
  verified_at: (string) | null
  tls_status: string
  name: (string) | null
  title: (string) | null
  description: (string) | null
  api_endpoint: (string) | null
  web_endpoint: (string) | null
  logo_url: (string) | null
  favicon_url: (string) | null
  images: unknown
  config: unknown
  is_active: boolean
}
