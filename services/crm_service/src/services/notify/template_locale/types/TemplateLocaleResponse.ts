
export type TemplateLocaleResponse = 
{
  record_code: string
  template_locale_id: string
  template_version_id: string
  locale: string
  subject?: (string) | null
  body_html?: (string) | null
  body_text: string
}
