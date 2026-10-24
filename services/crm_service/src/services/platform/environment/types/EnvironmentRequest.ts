
export type EnvironmentRequest = 
{
  environment_code: string
  region_code: string
  kind?: string
  tenancy_model?: string
  endpoint_url?: (string) | null
  max_tenants?: (number) | null
  status?: string
}
