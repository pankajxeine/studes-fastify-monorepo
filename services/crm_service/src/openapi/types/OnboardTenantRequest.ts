export type OnboardTenantRequest = 
{
  name: string
  slug: string
  primary_domain?: string
  plan_id: string
  tenant_type?: "school" | "crm"
  admin_email?: string
}
