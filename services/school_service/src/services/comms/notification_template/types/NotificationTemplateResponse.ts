
export type NotificationTemplateResponse = 
{
  id: number
  public_id: string
  record_code: string
  notification_template_code?: (string) | null
  name: string
  description?: (string) | null
  channel: string
  subject_template?: (string) | null
  body_template: string
  is_mandatory: boolean
  sort_order: number
  is_active: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
