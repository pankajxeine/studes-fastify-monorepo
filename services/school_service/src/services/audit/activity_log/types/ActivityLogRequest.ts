
export type ActivityLogRequest = 
{
  occurred_at?: string
  app_user_id?: (string) | null
  username?: (string) | null
  campus_id?: (string) | null
  activity_type: string
  outcome?: string
  module?: (string) | null
  object_type?: (string) | null
  object_id?: (string) | null
  target_app_user_id?: (string) | null
  description: string
  details?: unknown
  ip_address?: (string) | null
  user_agent?: (string) | null
  session_id?: (string) | null
  request_id?: (string) | null
}
