
export type TenantConfigResponse = 
{
  record_code: string
  tenant_config_id: string
  tenant_application_id: string
  config_key: string
  value: unknown
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
