
export type NotificationTemplateUpdateRequest = 
{
  notification_template_code: (string) | null
  name: string
  description: (string) | null
  channel: string
  subject_template: (string) | null
  body_template: string
  is_mandatory: boolean
  sort_order: number
  is_active: boolean
}
