
export type ApplicationRequest = 
{
  application_code: string
  name: string
  description?: (string) | null
  industry_code: string
  base_domain: string
  supports_custom_domain?: boolean
  tenancy_model?: string
  snapshot_ttl_sec?: number
  grace_days_default?: number
  is_active?: boolean
}
