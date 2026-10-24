
export type NotificationRequest = 
{
  app_user_id: string
  notification_template_code?: (string) | null
  channel: string
  title: string
  body: string
  payload?: unknown
  status?: string
  scheduled_at?: string
  sent_at?: (string) | null
  delivered_at?: (string) | null
  read_at?: (string) | null
  retry_count?: number
  failure_reason?: (string) | null
}
