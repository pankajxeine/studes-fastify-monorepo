
export type GetCpanelRouteDomainResponse = 
{
  domain: string
  domain_type: "tenant" | "cpanel" | "crm"
  application_code: string
  tenant_id?: (string) | null
  tenant_application_id?: (string) | null
  db_name?: (string) | null
  slug: string
  domain_shortcode?: string
  name: string
  title: string
  description?: (string) | null
  api_endpoint?: (string) | null
  web_endpoint?: (string) | null
  logo_url?: (string) | null
  favicon_url?: (string) | null
  images: string[]
  config: Record<string, unknown>
  settings?: Record<string, unknown>
}
