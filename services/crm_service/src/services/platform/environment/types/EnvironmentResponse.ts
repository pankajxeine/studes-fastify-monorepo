
export type EnvironmentResponse = 
{
  id: number
  public_id: string
  record_code: string
  environment_id: string
  environment_code: string
  region_code: string
  kind: string
  tenancy_model: string
  endpoint_url?: (string) | null
  max_tenants?: (number) | null
  status: string
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
