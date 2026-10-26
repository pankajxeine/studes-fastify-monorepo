
export type ApplicationResponse = 
{
  record_code: string
  application_id: string
  application_code: string
  name: string
  description?: (string) | null
  industry_code: string
  base_domain: string
  supports_custom_domain: boolean
  tenancy_model: string
  snapshot_ttl_sec: number
  grace_days_default: number
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
