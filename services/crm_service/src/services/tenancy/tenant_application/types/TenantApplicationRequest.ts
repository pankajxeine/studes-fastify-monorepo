
export type TenantApplicationRequest = 
{
  tenant_id: string
  application_id: string
  environment_id: string
  status?: string
  db_locator?: (string) | null
  schema_slug?: (string) | null
  provisioned_at?: (string) | null
  deprovisioned_at?: (string) | null
}
