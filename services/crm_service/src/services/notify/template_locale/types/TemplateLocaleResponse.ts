
export type TemplateLocaleResponse = 
{
  id: number
  public_id: string
  record_code: string
  template_version_id: string
  locale: string
  subject?: (string) | null
  body_html?: (string) | null
  body_text: string
}
