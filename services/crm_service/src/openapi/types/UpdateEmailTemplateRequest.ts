export type UpdateEmailTemplateRequest = 
{
  name?: string
  subject?: string
  body_html?: string
  body_text?: string
  status?: "active" | "inactive"
}
