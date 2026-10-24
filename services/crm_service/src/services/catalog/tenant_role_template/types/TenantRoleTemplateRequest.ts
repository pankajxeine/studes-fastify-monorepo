
export type TenantRoleTemplateRequest = 
{
  application_id: string
  role_code: string
  name: string
  description?: (string) | null
  permission_codes?: string
  is_tenant_admin?: boolean
  sort_order?: number
}
