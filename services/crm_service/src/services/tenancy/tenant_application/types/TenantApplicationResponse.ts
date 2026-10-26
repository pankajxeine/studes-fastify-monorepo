
export type TenantApplicationResponse = 
{
  record_code: string
  tenant_application_id: string
  tenant_id: string
  application_id: string
  environment_id: string
  status: string
  db_locator?: (string) | null
  schema_slug?: (string) | null
  provisioned_at?: (string) | null
  deprovisioned_at?: (string) | null
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
