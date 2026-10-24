
export type ConfigDefinitionResponse = 
{
  id: number
  public_id: string
  record_code: string
  config_key: string
  application_id?: (string) | null
  value_type: string
  json_schema?: (unknown) | null
  default_value?: (unknown) | null
  is_tenant_overridable: boolean
  is_secret: boolean
  description: string
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
