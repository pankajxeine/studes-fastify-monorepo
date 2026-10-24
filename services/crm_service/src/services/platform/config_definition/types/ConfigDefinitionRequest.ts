
export type ConfigDefinitionRequest = 
{
  config_key: string
  application_id?: (string) | null
  value_type: string
  json_schema?: (unknown) | null
  default_value?: (unknown) | null
  is_tenant_overridable?: boolean
  is_secret?: boolean
  description: string
  is_active?: boolean
}
