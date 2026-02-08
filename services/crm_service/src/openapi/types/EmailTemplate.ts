export type EmailTemplate = 
{
  id: string
  name: string
  subject: string
  body_html: string
  body_text?: string
  status: "active" | "inactive"
}
