
export type TemplateLocaleUpdateRequest = 
{
  template_version_id: string
  locale: string
  subject: (string) | null
  body_html: (string) | null
  body_text: string
}
