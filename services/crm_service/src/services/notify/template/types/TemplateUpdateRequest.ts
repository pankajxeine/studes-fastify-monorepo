
export type TemplateUpdateRequest = 
{
  template_code: string
  application_id: (string) | null
  category: string
  channel: string
  description: (string) | null
  variables_schema: unknown
  is_system: boolean
  is_active: boolean
}
