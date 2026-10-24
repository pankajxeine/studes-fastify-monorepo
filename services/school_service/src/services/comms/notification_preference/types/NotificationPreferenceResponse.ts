
export type NotificationPreferenceResponse = 
{
  id: number
  public_id: string
  record_code: string
  notification_preference_id: string
  app_user_id: string
  notification_template_code: string
  channel: string
  is_enabled: boolean
  created_at: string
  created_by?: (string) | null
  updated_at: string
  updated_by?: (string) | null
}
