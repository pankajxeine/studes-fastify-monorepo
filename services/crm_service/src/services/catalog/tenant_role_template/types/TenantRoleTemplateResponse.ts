
export type TenantRoleTemplateResponse = 
{
  id: number
  public_id: string
  record_code: string
  application_id: string
  role_code: string
  name: string
  description?: (string) | null
  permission_codes: string
  is_tenant_admin: boolean
  sort_order: number
  created_at: string
  updated_at: string
}
