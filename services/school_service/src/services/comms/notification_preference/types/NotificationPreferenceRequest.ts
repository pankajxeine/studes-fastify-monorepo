
export type NotificationPreferenceRequest = 
{
  app_user_id: string
  notification_template_code: string
  channel: string
  is_enabled?: boolean
}
