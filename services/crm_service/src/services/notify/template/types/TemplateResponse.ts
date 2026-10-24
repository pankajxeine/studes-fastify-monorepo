
export type TemplateResponse = 
{
  id: number
  public_id: string
  record_code: string
  template_id: string
  template_code: string
  application_id?: (string) | null
  category: string
  channel: string
  description?: (string) | null
  variables_schema: unknown
  is_system: boolean
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
